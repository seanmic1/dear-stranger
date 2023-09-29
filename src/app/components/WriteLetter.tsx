import { FormEvent } from "react";
import { css } from "../../../styled-system/css";
import { container, flex } from "../../../styled-system/patterns";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import options from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import Button from "./Button";
import TextAreaWithCounter from "./TextAreaWithCounter";

export default async function WriteLetter() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin");
  }

  async function submitLetter(formData: FormData) {
    "use server";

    const response = await prisma.letter.create({
      data: {
        letterAuthorEmail: String(session?.user?.email),
        letterContent: String(formData.get("content")),
      },
    });

    if (response) {
      redirect("writeletter/success");
    } else {
      redirect("writeletter/fail");
    }
  }

  // check if user has already written a letter in the past 24 hours (TODO)

  async function randomSuggestion() {
    function getRandomInt(max: number) {
      return Math.floor(Math.random() * max);
    }

    let randomSuggestions = [
      "Tell them about your day?",
      "Tell them what happened yesterday?",
      "Tell them what's been going on?",
      "Spill the tea?",
      "Spill the tea?",
      "Spill the tea?",
      "Spill the tea?",
      "Tell them a random fact about your life?",
      "Tell them about \"THAT\" guy?",
      "Tell them about \"THAT\" girl?",
      "Tell them about \"THAT\" person?",
      "Tell them about an unpopular opinion you have?",
      "Tell them how you're doing?",
      "Tell them your honest opinion on something?",
      "Tell them a secret?",
      "Tell them a dark secret?",
      "Tell them a deep, dark secret?",
      "Tell them a confession?",
      "Tell them a silly confession?",
      "Tell them a stupid confession?",
      "Tell them something no one knows about you?",
      "Tell them something you've never told anyone?",
      "Tell them a silly joke?",
      "Tell them a funny joke?",
      "Tell them a stupid joke?",
      "Ask them for a second opinion?",
      "Ask them for their opinion on something?",
      "Ask them for honest thoughts?",
      "Ask them a burning question?",
      "Ask them about something?",
      "Ask them about life?",
      "Ask them for advice?",
      "Ask them for life advice?",
      "Ask them to rate something?",
    ];

    return randomSuggestions.at(getRandomInt(randomSuggestions.length));
  }

  return (
    <div className={container({ maxW: "4xl" })}>
      <p className={css({ fontSize: "3xl", textAlign: "center", p: "8" })}>
        Write a letter
      </p>
      <p className={css({ fontSize: "sm", color:"darkgray", textAlign: "center", fontStyle:"italic", pb:2})}>
        {await randomSuggestion()}
      </p>
      <form id="letterForm" action={submitLetter}>
        <TextAreaWithCounter>
          {"Dear stranger,\n\n"}
        </TextAreaWithCounter>
        <div className={flex({ justifyContent: "space-between" })}>
          <Button></Button>
        </div>
      </form>
    </div>
  );
}
