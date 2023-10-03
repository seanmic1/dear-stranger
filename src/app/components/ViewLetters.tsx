import { FormEvent } from "react";
import { css } from "../../../styled-system/css";
import {
  container,
  flex,
  stack,
  spacer,
  center,
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
import DeleteButton, { confirmDelete } from "./DeleteButton";
import ViewButton from "./ViewButton";

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

  async function deleteLetter(formData: FormData) {
    "use server";
    console.log("deleting letter: " + String(formData.get("id")));
    await prisma.letter.delete({
      where: {
        id: parseInt(String(formData.get("id"))),
      },
    });
    redirect("/viewletters");
  }

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const ampm = hour >= 12 ? "PM" : "AM";

    function getDaySuffix(day: number): string {
      if (day >= 11 && day <= 13) {
        return "th";
      }
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    }

    const formattedDate = `${day}${getDaySuffix(
      day
    )} ${month} ${year}, at ${hour}:${minute
      .toString()
      .padStart(2, "0")} ${ampm}`;
    return formattedDate;
  }

  if (!letters.length) {
    return (
      <div className={container({ maxW: "4xl" })}>
        <p className={css({ fontSize: "3xl", textAlign: "center", p: "8" })}>
          View Letters
        </p>
          <div className={stack({ direction: "column", px:8})}>
            <p
              className={center({
                fontSize: { base: "0.5rem", md: "1rem" },
                p: 4,
                textAlign: "center",
              })}
            >
              No letters found.&nbsp;
              <Link href={"/writeletter"}>
                <span
                  className={css({
                    color: "blue",
                    _dark: { color: "darkcyan" },
                  })}
                >
                  Write one now?
                </span>
              </Link>
            </p>
          </div>
      </div>
    );
  } else {
    return (
      <div className={container({ maxW: "4xl" })}>
        <p className={css({ fontSize: "3xl", textAlign: "center", p: "8" })}>
          View Letters
        </p>
        <div
          className={css({
            display: "grid",
            gap: "2rem",
            justifyContent: "center",
          })}
        >
          {letters.map((letter) => (
            <form
              action={deleteLetter}
              onSubmit={confirmDelete}
              key={letter.id}
              className={css({
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              })}
            >
              <div className={css({ marginRight: "1rem", flex: 1 })}>
                <input
                  type="text"
                  name="id"
                  className={css({ display: "none" })}
                  defaultValue={letter.id}
                ></input>
                <LetterDetails>
                  <p
                    className={css({
                      fontSize: { base: "0.8rem", md: "1rem" },
                      textAlign: "left",
                    })}
                  >
                    Letter #{letter.id}
                  </p>
                  <p
                    className={css({
                      fontSize: { base: "0.8rem", md: "1rem" },
                      textAlign: "left",
                    })}
                  >
                    Sent on {formatDate(String(letter.letterDate))}
                  </p>
                </LetterDetails>
              </div>
              <div className={css({ marginRight: "1rem" })}>
                <Link href={`/readresponse/${letter.id}`}>
                  <ViewButton></ViewButton>
                </Link>
              </div>
              <DeleteButton></DeleteButton>
            </form>
          ))}
        </div>
      </div>
    );
  }
}
