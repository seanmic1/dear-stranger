import { FormEvent } from "react";
import { css } from "../../../styled-system/css";
import { center, container, flex } from "../../../styled-system/patterns";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import options from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import Button from "./Button";
import TextAreaWithCounter from "./TextAreaWithCounter";
import CountrySelect from "./CountrySelect";
import Link from "next/link";
import { CustomSession } from "@/lib/CustomSession";

export default async function WriteLetter() {
  const session = (await getServerSession(options)) as CustomSession;

  if (!session) {
    redirect("/api/auth/signin");
  }

  async function submitLetter(formData: FormData) {
    "use server";

    // check for toxicity
    const toxicCheck = await fetch("https://dear-stranger.vercel.app/api/checkToxic", {
      method: "POST",
      body: JSON.stringify({ content: formData.get("content") }),
      cache: "no-cache",
    });
    const isToxic = (await toxicCheck.json()).response;

    if (isToxic) {
      redirect("/malicious");
    }

    const response = await prisma.letter.create({
      data: {
        letterAuthorId: String(session.user?.id),
        letterContent: String(formData.get("content")),
        letterCountry:
          String(formData.get("country")) === ""
            ? null
            : String(formData.get("country")),
      },
    });

    await prisma.user.update({
      where: { email: String(session?.user?.email) },
      data: {
        country: String(formData.get("country")),
      },
    });

    if (response) {
      redirect("/success");
    } else {
      redirect("/fail");
    }
  }

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
      'Tell them about "THAT" guy?',
      'Tell them about "THAT" girl?',
      'Tell them about "THAT" person?',
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

  let lastDay = Date.now() - 24 * 60 * 60 * 1000;
  let stringLastDay = new Date(lastDay).toISOString();

  const numberOfLettersInPastHour = await prisma.letter.count({
    where: {
      AND: [
        { letterAuthorId: String(session.user?.id) },
        {
          letterDate: {
            gte: stringLastDay,
          },
        },
      ],
    },
  });

  if (numberOfLettersInPastHour >= 10) {
    return (
      <div className={container({ maxW: "4xl" })}>
        <p className={css({ fontSize: "3xl", textAlign: "center", p: "8" })}>
          To prevent spam, you can only write 10 letters per hour! Please try
          again later.
        </p>
        <Link href="/">
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
        </Link>
      </div>
    );
  }

  return (
    <div className={container({ maxW: "4xl" })}>
      <p className={css({ fontSize: "3xl", textAlign: "center", p: "8" })}>
        Write a letter
      </p>
      <p
        className={css({
          fontSize: "sm",
          color: "darkgray",
          textAlign: "center",
          fontStyle: "italic",
          pb: 2,
        })}
      >
        {await randomSuggestion()}
      </p>
      <form id="letterForm" action={submitLetter}>
        <TextAreaWithCounter>{"Dear stranger,\n\n"}</TextAreaWithCounter>
        <div
          className={flex({
            justifyContent: "space-between",
            direction: { base: "column", md: "row" },
            gap: { base: "1rem", md: "none" },
          })}
        >
          <CountrySelect></CountrySelect>
          <Button></Button>
        </div>
      </form>
    </div>
  );
}
