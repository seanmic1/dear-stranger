import prisma from "@/lib/prisma";
import { css } from "../../../../styled-system/css";
import { center, container, stack } from "../../../../styled-system/patterns";
import { Letter, Prisma, User } from "@prisma/client";
import { getServerSession } from "next-auth";
import options from "@/app/api/auth/[...nextauth]/options";
import countryData from "@/app/components/countryData.json";
import Image from "next/image";

import type { Metadata } from "next";
import { redirect } from "next/navigation";
import ReportButton, { handleError, handleReportLetter } from "@/app/components/ReportButton";
export const metadata: Metadata = {
  title: "Read Response",
  description: "Dear Stranger - Read response",
};

async function reportResponse(formData: FormData) {
  "use server";

  const session = await getServerSession()

  const letter = await prisma.letter.findUnique({
    where: { id: Number(formData.get("letterId")) },
  }) as Letter;

  if (session?.user?.email !== letter.letterAuthorEmail){
    
    return { message: 'Only the letter author can report responses!' }
  }

  const report = await prisma.report.create({
    data: {
      reportContent: String(letter.responseContent),
      reportContentType: "RESPONSE",
      reportCreatorEmail: String(session?.user?.email),
      reportContentAuthorEmail: String(letter.responseAuthorEmail)
    },
  });

  // delete response from letter
  const updatedLetter = await prisma.letter.update({
    where: { id: Number(formData.get("letterId")) },
    data:{
      responseAuthor: {disconnect:true},
      responseContent: null,
      responseDate: null
    }
  });

  redirect("/viewletters")
}

export default async function ReadResponseID({
  params,
}: {
  params: { letterID: string };
}) {
  // get session
  const session = await getServerSession(options);

  // ask to login if no session
  if (!session) {
    redirect("/api/auth/signin");
  }

  // check if session user has permission to read

  // get letter
  const letter = (await prisma.letter.findUnique({
    where: { id: Number(params.letterID) },
  })) as Letter;

  const author = (await prisma.user.findUnique({
    where: { email: letter.letterAuthorEmail },
  })) as User;

  const responder =
    letter.responseAuthorEmail !== null
      ? ((await prisma.user.findUnique({
          where: { email: letter.responseAuthorEmail },
        })) as User)
      : null;

  const responseCountryCode =
    responder !== null
      ? Object.keys(countryData as CountryData).find(
          (code) => (countryData as CountryData)[code] === responder.country
        ) || ""
      : null;
  const responseCountryUrl =
    responseCountryCode !== null
      ? `https://flagsapi.com/${responseCountryCode}/flat/64.png`
      : null;

  type CountryData = { [code: string]: string };
  const countryCode =
    Object.keys(countryData as CountryData).find(
      (code) => (countryData as CountryData)[code] === author.country
    ) || "";
  const countryUrl = `https://flagsapi.com/${countryCode}/flat/64.png`;

  if (letter === null) {
    <>
      return
      <p
        className={center({
          fontSize: "3xl",
          textAlign: "center",
          mt: "10rem",
          p: "8",
        })}
      >
        Letter not found
      </p>
      <div
        className={center({
          m: "20",
          padding: "2",
          rounded: "md",
          background: "amber.300",
          border: "2px solid transparent",
          boxSizing: "border-box",
          _hover: {
            border: "2px solid black",
          },
          color: "black",
        })}
      >
        Back to home
      </div>
    </>;
  }

  if (
    !(
      session?.user?.email === letter.letterAuthorEmail ||
      session?.user?.email === letter.responseAuthorEmail
    )
  ) {
    return (
      <p
        className={css({
          fontSize: "3xl",
          textAlign: "center",
          mt: "10rem",
          p: "8",
        })}
      >
        You do not have permission to read this letter
      </p>
    );
  }

  return (
    <div className={container({ maxW: "8xl" })}>
      <p className={css({ fontSize: "3xl", textAlign: "center", p: "8" })}>
        Read response
      </p>
      <div
        className={stack({
          direction: { base: "column", md: "row" },
          justifyContent: "center",
        })}
      >
        <div className={css({ w: "100%" })}>
          <p className={css({ fontWeight: "bold" })}>Original letter</p>
          {author.country !== "" ? (
            <div className={stack({ direction: "row" })}>
              <div className={center({})}>
                Written by a stranger from: {author.country}
              </div>
              <Image
                src={countryUrl}
                alt={author.country}
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
            <div className={css({ height: "32px" })}>
              Written by a stranger from: Anonymous country
            </div>
          )}
          <p
            className={css({
              background: "amber.300",
              width: "100%",
              height: "20rem",
              padding: "12px 20px",
              border: "2px solid black",
              whiteSpace: "pre-wrap",
              overflowY: "scroll",
              _focus: {
                outline: "none",
              },
              color: "black",
            })}
          >
            {letter.letterContent}
          </p>
        </div>
        <div className={css({ w: "100%" })}>
          <p className={css({ fontWeight: "bold" })}>Response</p>
          <form action={reportResponse} onSubmit={handleReportLetter} onError={handleError}>
            <input
              name="letterId"
              type="text"
              defaultValue={letter.id}
              hidden
            ></input>
            {responder !== null ? (
              <div className={stack({ direction: "row" })}>
                {responder.country !== "" ? (
                  <>
                    <div className={center({})}>
                      Written by a stranger from: {responder.country}
                    </div>
                    <Image
                      src={String(responseCountryUrl)}
                      alt={author.country}
                      width={32}
                      height={32}
                      className={css({
                        filter: {
                          base: "drop-shadow(0px 5px 10px rgba(0,0,0,0.25))",
                          _dark:
                            "drop-shadow(0px 5px 10px rgba(255,255,255,0.25))",
                        },
                      })}
                    />{" "}
                  </>
                ) : (
                  <div className={center({ height: "32px" })}>
                    Written by a stranger from: Anonymous country
                  </div>
                )}
              </div>
            ) : (
              <div className={css({ height: "32px", fontStyle: "italic" })}>
                It's quiet around here...
              </div>
            )}
            <p
              className={css({
                background: "amber.300",
                width: "100%",
                height: "20rem",
                padding: "12px 20px",
                border: "2px solid black",
                whiteSpace: "pre-wrap",
                overflowY: "scroll",
                _focus: {
                  outline: "none",
                },
                color: "black",
              })}
            >
              {letter.responseContent !== null
                ? letter.responseContent
                : "No response yet"}
            </p>
            {responder !== null ? <ReportButton></ReportButton> : <></>}
          </form>
        </div>
      </div>
    </div>
  );
}
