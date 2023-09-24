import { FormEvent } from "react";
import { css } from "../../../styled-system/css";
import { container, flex } from "../../../styled-system/patterns";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import options from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import Button from "./Button";

export default async function WriteLetter() {
  const session = await getServerSession(options);

  async function submitLetter(formData: FormData) {
    "use server";

    const response = await prisma.letter.create({
      data: {
        letterAuthorEmail: String(session?.user?.email),
        letterContent: String(formData.get("content")),
      },
    });

    if (response) {
      redirect('writeletter/success')
    } else {
      redirect('writeletter/fail')
    }
  }

  // check if user has already written a letter in the past 24 hours (TODO)

  return (
    <div className={container({ maxW: "4xl" })}>
      <p className={css({ fontSize: "3xl", textAlign: "center", p: "8" })}>
        Write a letter
      </p>
      <form id="letterForm" action={submitLetter}>
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
  );
}
