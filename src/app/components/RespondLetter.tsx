import { css } from "../../../styled-system/css";
import { center, container, flex, stack } from "../../../styled-system/patterns";
import { getServerSession } from "next-auth";
import options from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import Button from "./Button";
import { Letter } from "@prisma/client";
import Link from "next/link";

export default async function RespondLetter() {
  const session = await getServerSession(options);

  // check if user already has letterToRespond
  // get user
  const sessionUser = await prisma.user.findUnique({
    where: { email: String(session?.user?.email) },
  });
  // check letterToRespond
  const hasLetter = sessionUser?.letterToRespond !== null;

  var randomLetter: Letter;
  
  if (hasLetter) {
    // get assigned letter
    randomLetter = (await prisma.letter.findUnique({
      where: { id: Number(sessionUser?.letterToRespond) },
    })) as Letter;
  } else {
    // get random letter and assign
    // get unresponded letters that are not by the responder
    const unrespondedLetters = await prisma.letter.findMany({
      where: {responseAuthorEmail: null, NOT: {letterAuthorEmail: sessionUser.email}},
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
      return (
        <div className={container({ maxW: "4xl", mt: "32" })}>
          <p className={css({ fontSize: "3xl", textAlign: "center", p: "8" })}>
            There are no letters to respond to at the moment. <br></br> Please try again later!
          </p>
          <Link href="/">
            <div
              className={center({
                m: "20",
                padding: "2",
                rounded: "md",
                background: "blue.400",
                border: "2px solid transparent",
                boxSizing: "border-box",
                _hover: {
                  border: "2px solid black",
                },
                _active: {
                  bg: "gray.500",
                },
              })}
            >
              Back to home
            </div>
          </Link>
        </div>
      );
    }
  }

  async function submitResponse(formData: FormData) {
    "use server";

    // update letter to create response
    const response = await prisma.letter.update({
      where: {
        id: randomLetter.id,
      },
      data: {
        responseAuthorEmail: String(session?.user?.email),
        responseContent: String(formData.get("content")),
      },
    });

    // update user letterToRespond to null
    await prisma.user.update({
      where: { email: String(sessionUser?.email) },
      data: {
        letterToRespond: null,
      },
    });

    if (response) {
      redirect("respondletter/success");
    } else {
      redirect("respondletter/fail");
    }
  }

  return (
    <div className={container({ maxW: "8xl" })}>
      <p className={css({ fontSize: "3xl", textAlign: "center", p: "8" })}>
        Respond to a letter
      </p>
      <div className={stack({ direction: "row", justifyContent: "center" })}>
        <p
          className={css({
            background: "amber.300",
            width: "50%",
            height: "20rem",
            padding: "12px 20px",
            border: "2px solid black",
            _focus: {
              outline: "none",
            },
          })}
        >
          {randomLetter?.letterContent}
        </p>

        <form
          id="letterForm"
          action={submitResponse}
          className={css({ width: "50%" })}
        >
          <textarea
            name="content"
            defaultValue={"Dear Stranger,\n\n"}
            className={css({
              background: "amber.300",
              width: "100%",
              height: "20rem",
              padding: "12px 20px",
              border: "2px solid black",
              _focus: {
                outline: "none",
              },
            })}
          ></textarea>
          <div className={flex({ justifyContent: "space-between" })}>
            <div>
              Email: {session?.user?.email}
              <br />
              User: {session?.user?.name}
            </div>
            <Button></Button>
          </div>
        </form>
      </div>
    </div>
  );
}
