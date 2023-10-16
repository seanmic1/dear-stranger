import Link from "next/link";
import { CenterStyles, center, stack } from "../../../styled-system/patterns";
import WriteRespondButton from "./WriteRespondButton";
import { css } from "../../../styled-system/css";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import MigrateGuestToAcc from "./MigrateGuestToAcc";
import { cache } from "react";
import { CustomSession } from "@/lib/CustomSession";
import options from "../api/auth/[...nextauth]/options";

export const revalidate = 3600;

export const getLettersWritten = cache(async () => {
  const lettersWritten = await prisma.letter.count();
  return lettersWritten;
});

export const getUnrespondedLetters = cache(async () => {
  const session = (await getServerSession(options)) as CustomSession;

  if (session) {
    const unrespondedLetters = await prisma.letter.count({
      where: {
        responseContent: null,
        letterAuthorId: {not: String(session.user?.id)}
      },
    });
    return unrespondedLetters;
  }

  const unrespondedLetters = await prisma.letter.count({
    where: { responseContent: null },
  });

  return unrespondedLetters;
});

export default async function HomePage() {

  const lettersWritten = await getLettersWritten();
  const unrespondedLetters = await getUnrespondedLetters();

  return (
    <div
      className={css({
        height: "calc(100% - 60px)",
      })}
    >
      <MigrateGuestToAcc></MigrateGuestToAcc>
      <div className={center({ p: 10, width: "100%" })}>
        <div className={stack({ direction: "column" })}>
          <p
            className={center({
              fontWeight: "bold",
              p: 2,
              textAlign: "center",
            })}
          >
            Write anonymized letters and get replies from fellow strangers ✨
          </p>
          {/* {session?.user?.email?.endsWith("example.com") ? (
            <p className={center({ textAlign: "center" })}>
              As an anonymous user, your account is only valid for 30 days. 
              <br/>Logging out or clearing cache will delete all letters you
              have written on this account. 
              <br/>You will also not be able to recieve email notifications if your letters get a response.
              <br/>Please log in for a better experience.
            </p>
          ) : (
            <></>
          )} */}
        </div>
      </div>
      <div
        className={stack({
          width: "100%",
          direction: { base: "column", lg: "row" },
          justify: "center",
          gap: { base: "5rem" },
          mt: "1rem",
          mb: "1rem",
        })}
      >
        <div className={center({ flex: "1", flexDir: "column" })}>
          <Link href={"/writeletter"}>
            <WriteRespondButton>Write a letter</WriteRespondButton>
          </Link>
          <p
            className={css({ textAlign: "center", p: 4, fontStyle: "italic" })}
          >
            {lettersWritten} letters written worldwide!
          </p>
        </div>
        <div className={center({ flex: "1", flexDir: "column" })}>
          <Link href={"/respondletter"}>
            <WriteRespondButton>Respond to a letter</WriteRespondButton>
          </Link>
          <p
            className={css({ textAlign: "center", p: 4, fontStyle: "italic" })}
          >
            {unrespondedLetters}{" "}
            {unrespondedLetters === 1 ? "letter" : "letters"} with no response!
          </p>
        </div>
      </div>
    </div>
  );
}
