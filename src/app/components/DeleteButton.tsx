"use clint"

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
import LetterViewButton from "./LetterViewButton";
import Link from "next/link";

export default function DeleteButton() {
  const signButton: SystemStyleObject = {
    border: "2px solid black",
    color: "black",
    p: 2,
    fontSize: { base: "0.75rem", md: "1rem" },
    rounded: "sm",
    background: { base: "amber.300", _dark: "amber.300" },
    display: {base: "none", md:"block"},
    zIndex: 2,
    alignSelf: "end"
  };

  return (
    <div className={css(signButton)}>
      Delete Letter
    </div>
  );
}
