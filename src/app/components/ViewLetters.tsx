import { FormEvent } from "react";
import { css } from "../../../styled-system/css";
import {
  container,
  flex,
  stack,
  spacer,
  center
} from "../../../styled-system/patterns";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import options from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import Button from "./Button";
import { User, Letter, Prisma } from "@prisma/client";
import LetterDetails from "./LetterDetails";
import Link from "next/link";
import DeleteButton from "./DeleteButton";

export default async function ViewLetters() {
    const session = await getServerSession(options);

    if (!session) {
        redirect("/api/auth/signin");
    }
    
  const letters = await prisma.letter.findMany({
    where: {
      letterAuthorEmail: String(session?.user?.email),
    },
    orderBy: {
      letterDate: "desc",
    },
  });

  async function deleteLetter(letterId: number) {
    await prisma.letter.delete({
        where: {
          id: letterId,
        },
      });
    }

  function formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
  
    const formattedDate: string = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  }
  
  if (!letters.length) {
    return (
      <div className={container({ maxW: "4xl" })}>
        <p className={css({ fontSize: "3xl", textAlign: "center", p: "8" })}>
          View Letters
        </p>
        <div className={css({
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
          gap: "2rem",
          justifyContent: "center",
        })}>
          <div className={stack({ direction: "column" })}>
            <p className={center({ fontSize: "1rem", p: 4, textAlign: "center" })}>
              No letters found.&nbsp;<Link href={"/writeletter"}>
              <span className={css({ color: "blue", _dark: { color: "darkcyan" } })}>
                Write one now?
              </span>
            </Link>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={container({ maxW: "4xl" })}>
        <p className={css({ fontSize: "3xl", textAlign: "center", p: "8" })}>
          View Letters
        </p>
        <div className={css({
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
          gap: "2rem",
          justifyContent: "center",
        })}>
        {letters.map((letter) => (
          <div key={letter.id} className={css({ display: "flex", alignItems: "center", justifyContent: "space-between" })}>
            <div>
              <Link href={`/readresponse/${letter.id}`}>
                <LetterDetails>
                  <p className={css({ fontSize: "1rem", textAlign: "left" })}>Letter #{letter.id}</p>
                  <p className={css({ fontSize: "1rem", textAlign: "left" })}>{formatDate(String(letter.letterDate))}</p>
                </LetterDetails>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
  }
}  