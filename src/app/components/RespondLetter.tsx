import { css } from "../../../styled-system/css";
import {
  center,
  container,
  flex,
  stack,
} from "../../../styled-system/patterns";
import { getServerSession } from "next-auth";
import options from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import Button, { handleSubmit } from "./Button";
import { User, Letter, Prisma } from "@prisma/client";
import Link from "next/link";
import "@/lib/mailService";
import { sendMail } from "@/lib/mailService";
import TextAreaWithCounter from "./TextAreaWithCounter";
import countryData from "./countryData.json";
import Image from "next/image";
import CountrySelect from "./CountrySelect";
import ReportButton, { handleError, handleReportLetter } from "./ReportButton";

async function reportLetter(formData: FormData) {
  "use server";

  const session = await getServerSession();

  const letter = (await prisma.letter.findUnique({
    where: { id: Number(formData.get("letterId")) },
  })) as Letter;

  // create report
  const report = await prisma.report.create({
    data: {
      reportContent: String(letter.letterContent),
      reportContentType: "LETTER",
      reportCreatorEmail: String(session?.user?.email),
      reportContentAuthorEmail: String(letter.letterAuthorEmail),
    },
  });

  // update isSpam of letter
  const updatedLetter = await prisma.letter.update({
    where: { id: Number(formData.get("letterId")) },
    data: {
      responseAuthor: { disconnect: true },
      letterIsSpam: true,
    },
  });

  // reset letterToRespond
  const user = await prisma.user.update({
    where: {
      email: String(session?.user?.email),
    },
    data: {
      letterToRespond: null,
    },
  });

  redirect("/");
}

export default async function RespondLetter() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin");
  }

  // check if user already has letterToRespond
  // get user
  const sessionUser = await prisma.user.findUnique({
    where: { email: String(session?.user?.email) },
  });
  // check letterToRespond
  const hasLetter = sessionUser?.letterToRespond !== null;

  var randomLetter: Letter | null;
  var letterAuthor: User;

  if (hasLetter) {
    // get assigned letter
    randomLetter = await prisma.letter.findUnique({
      where: { id: Number(sessionUser?.letterToRespond) },
    });

    if (randomLetter === null) {
      return NoLetterFound();
    }
  } else {
    // get random letter and assign
    // get unresponded letters that are not by the responder
    const unrespondedLetters = await prisma.letter.findMany({
      where: {
        responseAuthorEmail: null,
        NOT: { letterAuthorEmail: sessionUser.email, letterIsSpam: true },
      },
    });

    // check if there are any unresponded letters
    if (unrespondedLetters.length !== 0) {
      randomLetter = unrespondedLetters.at(
        Math.floor(Math.random() * unrespondedLetters.length)
      ) as Letter;

      // assign respondAuthor to user
      await prisma.letter.update({
        where: { id: Number(randomLetter?.id) },
        data: { responseAuthorEmail: sessionUser.email },
      });

      // assign letterToRespond in user
      await prisma.user.update({
        where: { email: String(sessionUser.email) },
        data: { letterToRespond: randomLetter?.id },
      });
    } else {
      return NoLetterFound();
    }
  }

  function NoLetterFound() {
    return (
      <div className={center({ flexDirection: "column" })}>
        <p
          className={css({
            fontSize: "3xl",
            textAlign: "center",
            mt: "10rem",
          })}
        >
          There are no letters to respond to at the moment. <br></br> Please try
          again later!
        </p>
        <Link href="/">
          <div
            className={css({
              mt: "5rem",
              padding: "2",
              rounded: "md",
              background: "amber.300",
              border: "2px solid black",
              boxSizing: "border-box",
              _hover: {
                transform: "scale(1.01)",
                boxShadow: {
                  base: "0 5px 10px 0 rgba(0,0,0,0.19)",
                  _dark: "0 5px 10px 0 rgba(255,255,255,0.19)",
                },
                transition: "all ease 0.1s",
              },
            })}
          >
            Back to home
          </div>
        </Link>
      </div>
    );
  }

  async function submitResponse(formData: FormData) {
    "use server";

    // update letter to create response
    const letter = await prisma.letter.update({
      where: {
        id: randomLetter?.id,
      },
      data: {
        responseAuthorEmail: String(session?.user?.email),
        responseContent: String(formData.get("content")),
        responseDate: new Date(),
      },
    });

    if (!(letter instanceof Prisma.PrismaClientKnownRequestError)) {
      // send email to letter author

      const letterLink =
        "https://dear-stranger.vercel.app/readresponse/" + String(letter.id);

      const subject = "Dear Stranger, you got a response to your letter!";
      const toEmail = letter.letterAuthorEmail;
      const otpText =
        "Read the response below! \n\n" + String(formData.get("content"));
      const htmlText = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="x-apple-disable-message-reformatting" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="color-scheme" content="light dark" />
        <meta name="supported-color-schemes" content="light dark" />
        <title></title>
        <style type="text/css" rel="stylesheet" media="all">
        /* Base ------------------------------ */
        
        @import url("https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap");
        body {
          width: 100% !important;
          height: 100%;
          margin: 0;
          -webkit-text-size-adjust: none;
        }
        
        a {
          color: lightblue;
          text-decoration: none;
        }
        
        a img {
          border: none;
        }
        
        td {
          word-break: break-word;
        }
        
        .preheader {
          display: none !important;
          visibility: hidden;
          mso-hide: all;
          font-size: 1px;
          line-height: 1px;
          max-height: 0;
          max-width: 0;
          opacity: 0;
          overflow: hidden;
        }
        /* Type ------------------------------ */
        
        body,
        td,
        th {
          font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
        }
        
        h1 {
          margin-top: 0;
          color: #333333;
          font-size: 22px;
          font-weight: bold;
          text-align: left;
        }
        
        h2 {
          margin-top: 0;
          color: #333333;
          font-size: 16px;
          font-weight: bold;
          text-align: left;
        }
        
        h3 {
          margin-top: 0;
          color: #333333;
          font-size: 14px;
          font-weight: bold;
          text-align: left;
        }
        
        td,
        th {
          font-size: 16px;
        }
        
        p,
        ul,
        ol,
        blockquote {
          margin: .4em 0 1.1875em;
          font-size: 16px;
          line-height: 1.625;
        }
        
        p.sub {
          font-size: 13px;
        }
        /* Utilities ------------------------------ */
        
        .align-right {
          text-align: right;
        }
        
        .align-left {
          text-align: left;
        }
        
        .align-center {
          text-align: center;
        }
        
        .u-margin-bottom-none {
          margin-bottom: 0;
        }
        /* Buttons ------------------------------ */
        
        .button {
          background-color: #3869D4;
          border-top: 10px solid #3869D4;
          border-right: 18px solid #3869D4;
          border-bottom: 10px solid #3869D4;
          border-left: 18px solid #3869D4;
          display: inline-block;
          color: #FFF;
          text-decoration: none;
          border-radius: 3px;
          box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16);
          -webkit-text-size-adjust: none;
          box-sizing: border-box;
        }
        
        .button--green {
          background-color: #22BC66;
          border-top: 10px solid #22BC66;
          border-right: 18px solid #22BC66;
          border-bottom: 10px solid #22BC66;
          border-left: 18px solid #22BC66;
        }
        
        .button--red {
          background-color: #FF6136;
          border-top: 10px solid #FF6136;
          border-right: 18px solid #FF6136;
          border-bottom: 10px solid #FF6136;
          border-left: 18px solid #FF6136;
        }
        
        @media only screen and (max-width: 500px) {
          .button {
            width: 100% !important;
            text-align: center !important;
          }
        }
        /* Attribute list ------------------------------ */
        
        .attributes {
          margin: 0 0 21px;
          border: 2px solid black;
        }
        
        .attributes_content {
          background-color: #fcd34d;
          padding: 16px;
          text-align: center;
        }
        
        .attributes_item {
          padding: 0;
        }
        /* Related Items ------------------------------ */
        
        .related {
          width: 100%;
          margin: 0;
          padding: 25px 0 0 0;
          -premailer-width: 100%;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
        }
        
        .related_item {
          padding: 10px 0;
          color: #CBCCCF;
          font-size: 15px;
          line-height: 18px;
        }
        
        .related_item-title {
          display: block;
          margin: .5em 0 0;
        }
        
        .related_item-thumb {
          display: block;
          padding-bottom: 10px;
        }
        
        .related_heading {
          border-top: 1px solid #CBCCCF;
          text-align: center;
          padding: 25px 0 10px;
        }
        /* Discount Code ------------------------------ */
        
        .discount {
          width: 100%;
          margin: 0;
          padding: 24px;
          -premailer-width: 100%;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
          background-color: #F4F4F7;
          border: 2px dashed #CBCCCF;
        }
        
        .discount_heading {
          text-align: center;
        }
        
        .discount_body {
          text-align: center;
          font-size: 15px;
        }
        /* Social Icons ------------------------------ */
        
        .social {
          width: auto;
        }
        
        .social td {
          padding: 0;
          width: auto;
        }
        
        .social_icon {
          height: 20px;
          margin: 0 8px 10px 8px;
          padding: 0;
        }
        /* Data table ------------------------------ */
        
        .purchase {
          width: 100%;
          margin: 0;
          padding: 35px 0;
          -premailer-width: 100%;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
        }
        
        .purchase_content {
          width: 100%;
          margin: 0;
          padding: 25px 0 0 0;
          -premailer-width: 100%;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
        }
        
        .purchase_item {
          padding: 10px 0;
          color: #51545E;
          font-size: 15px;
          line-height: 18px;
        }
        
        .purchase_heading {
          padding-bottom: 8px;
          border-bottom: 1px solid #EAEAEC;
        }
        
        .purchase_heading p {
          margin: 0;
          color: #85878E;
          font-size: 12px;
        }
        
        .purchase_footer {
          padding-top: 15px;
          border-top: 1px solid #EAEAEC;
        }
        
        .purchase_total {
          margin: 0;
          text-align: right;
          font-weight: bold;
          color: #333333;
        }
        
        .purchase_total--label {
          padding: 0 15px 0 0;
        }
        
        body {
          background-color: #F2F4F6;
          color: #51545E;
        }
        
        p {
          color: #51545E;
        }
        
        .email-wrapper {
          width: 100%;
          margin: 0;
          padding: 0;
          -premailer-width: 100%;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
          background-color: #F2F4F6;
        }
        
        .email-content {
          width: 100%;
          margin: 0;
          padding: 0;
          -premailer-width: 100%;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
        }
        /* Masthead ----------------------- */
        
        .email-masthead {
          padding: 25px 0;
          text-align: center;
        }
        
        .email-masthead_logo {
          width: 94px;
        }
        
        .email-masthead_name {
          font-size: 16px;
          font-weight: bold;
          color: #A8AAAF;
          text-decoration: none;
          text-shadow: 0 1px 0 white;
        }
        /* Body ------------------------------ */
        
        .email-body {
          width: 100%;
          margin: 0;
          padding: 0;
          -premailer-width: 100%;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
        }
        
        .email-body_inner {
          width: 570px;
          margin: 0 auto;
          padding: 0;
          -premailer-width: 570px;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
          background-color: #FFFFFF;
        }
        
        .email-footer {
          width: 570px;
          margin: 0 auto;
          padding: 0;
          -premailer-width: 570px;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
          text-align: center;
        }
        
        .email-footer p {
          color: #A8AAAF;
        }
        
        .body-action {
          width: 100%;
          margin: 30px auto;
          padding: 0;
          -premailer-width: 100%;
          -premailer-cellpadding: 0;
          -premailer-cellspacing: 0;
          text-align: center;
        }
        
        .body-sub {
          margin-top: 25px;
          padding-top: 25px;
          border-top: 1px solid #EAEAEC;
        }
        
        .content-cell {
          padding: 45px;
        }

        .innerLink {
          color: black;
          font-weight: 600;
        }
        /*Media Queries ------------------------------ */
        
        @media only screen and (max-width: 600px) {
          .email-body_inner,
          .email-footer {
            width: 100% !important;
          }
        }
        
        @media (prefers-color-scheme: dark) {
          body,
          .email-body,
          .email-body_inner,
          .email-content,
          .email-wrapper,
          .email-masthead,
          .email-footer {
            background-color: #333333 !important;
            color: #FFF !important;
          }
          p,
          a {
            color:lightblue;
          }
          ul,
          ol,
          blockquote,
          h1,
          h2,
          h3,
          span,
          .purchase_item {
            color: #FFF !important;
          }
          .attributes_content,
          .discount {
            background-color: #fcd34d !important;
          }
          .email-masthead_name {
            text-shadow: none !important;
          }
          .innerLink {
          color: white;
          text-shadow:
            -0.5px -0.5px 0 #000,
            0.5px -1px 0 #000,
            -0.5px 0.5px 0 #000,
            0.5px 0.5px 0 #000;
        }
        }
        
        :root {
          color-scheme: light dark;
          supported-color-schemes: light dark;
        }
        </style>
        <!--[if mso]>
        <style type="text/css">
          .f-fallback  {
            font-family: Arial, sans-serif;
          }
        </style>
      <![endif]-->
      </head>
      <body>
        <table class="email-wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation">
          <tr>
            <td align="center">
              <table class="email-content" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td class="email-masthead">
                    <p class="f-fallback email-masthead_name">
                    Dear Stranger,
                  </p>
                  </td>
                </tr>
                <!-- Email Body -->
                <tr>
                  <td class="email-body" width="570" cellpadding="0" cellspacing="0">
                    <table class="email-body_inner" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation">
                      <!-- Body content -->
                      <tr>
                        <td class="content-cell">
                          <div class="f-fallback">
                            Someone has responded to your letter!
                            <br>
                            <br>
                            <a href="${letterLink}" class="innerLink">
                            <table class="attributes" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                              <tr>
                                <td class="attributes_content">
                                    Read response
                                </td>
                              </tr>
                            </table>
                          </a>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <table class="email-footer" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td class="content-cell" align="center">
                          <p class="f-fallback sub align-center">
                            By Sean Michael
                            <br><a href="seanml.com">seanml.com</a>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>`;

      sendMail(subject, toEmail, otpText, htmlText);

      // update user letterToRespond to null
      await prisma.user.update({
        where: { email: String(sessionUser?.email) },
        data: {
          letterToRespond: null,
          country: String(formData.get("country")),
        },
      });

      redirect("respondletter/success");
    } else {
      redirect("respondletter/fail");
    }
  }
  type CountryData = { [code: string]: string };
  letterAuthor = (await prisma.user.findUnique({
    where: { email: randomLetter?.letterAuthorEmail },
  })) as User;
  const countryCode =
    Object.keys(countryData as CountryData).find(
      (code) => (countryData as CountryData)[code] === letterAuthor.country
    ) || "";
  const countryUrl = `https://flagsapi.com/${countryCode}/flat/64.png`;

  return (
    <div className={container({ maxW: "8xl" })}>
      <p className={css({ fontSize: "3xl", textAlign: "center", p: "8" })}>
        Respond to a letter
      </p>
      <p className={css({ fontSize: "sm", textAlign: "center", fontStyle:"italic", pb:4 })}>
        You will be assigned a new letter every 30 mins or after you respond to
        this one.
      </p>
      {countryCode !== "" ? (
        <div className={stack({ direction: "row" })}>
          <div className={center()}>
            Written by a stranger from: {letterAuthor.country}
          </div>
          <Image
            src={countryUrl}
            alt={letterAuthor.country}
            width={32}
            height={32}
            className={css({
              filter: {
                base: "drop-shadow(0px 5px 10px rgba(0,0,0,0.25))",
                _dark: "drop-shadow(0px 5px 10px rgba(255,255,255,0.25))",
              },
            })}
          />
        </div>
      ) : (
        <div className={css()}>
          Written by a stranger from: Anonymous country
        </div>
      )}
      <div
        className={stack({
          direction: { base: "column", md: "row" },
          justifyContent: "center",
        })}
      >
        <form
          action={reportLetter}
          onSubmit={handleReportLetter}
          onError={handleError}
          className={css({ width: { base: "100%", md: "50%" } })}
        >
          <input
            name="letterId"
            type="text"
            defaultValue={randomLetter.id}
            hidden
          ></input>
          <p
            className={css({
              background: "amber.300",
              width: "100%",
              height: "20rem",
              padding: "12px 20px",
              border: "2px solid black",
              whiteSpace: "pre-line",
              overflowY: "scroll",
              _focus: {
                outline: "none",
              },
              _dark: {
                color: "black",
              },
            })}
          >
            {randomLetter?.letterContent}
          </p>
          <ReportButton></ReportButton>
        </form>

        <form
          id="letterForm"
          action={submitResponse}
          className={css({
            width: { base: "100%", md: "50%" },
            mt: { base: "2rem", md: 0 },
            mb: { base: "5rem", md: 0 },
          })}
        >
          <TextAreaWithCounter></TextAreaWithCounter>
          <div className={flex({ justifyContent: "space-between" })}>
            <CountrySelect></CountrySelect>
            <Button></Button>
          </div>
        </form>
      </div>
    </div>
  );
}
