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
import ViewButton from "./ViewButton";

export default async function About() {
  
    return (
      <div className={container({ maxW: "4xl" })}>
        <p className={css({ fontSize: "3xl", textAlign: "center", p: "8" })}>
          About
        </p>
      </div>
    );
  }