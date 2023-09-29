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
import CountrySelect from "./CountrySelect";

export default async function WriteLetter() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin");
  }

  let selectedCountry = "";

  async function submitLetter(formData: FormData) {
    "use server";

    const response = await prisma.letter.create({
      data: {
        letterAuthorEmail: String(session?.user?.email),
        letterContent: String(formData.get("content")),
        // selectedCountry: String(selectedCountry), 
      },
    });

    if (response) {
      redirect("writeletter/success");
    } else {
      redirect("writeletter/fail");
    }
  }

  return (
    <div className={container({ maxW: "4xl" })}>
      <p className={css({ fontSize: "3xl", textAlign: "center", p: "8" })}>
        Write a letter
      </p>
      <form id="letterForm" action={submitLetter}>
        <TextAreaWithCounter></TextAreaWithCounter>

        <div className={flex({ justifyContent: "space-between" })}>
          <CountrySelect></CountrySelect>
          <Button></Button>
        </div>
      </form>
    </div>
  );
}