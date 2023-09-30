import { FormEvent } from "react";
import { css } from "../../../styled-system/css";
import { container, flex, stack, spacer } from "../../../styled-system/patterns";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import options from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import Button from "./Button";

export default async function ViewLetters() {
  
  return (
    <div className={container({ maxW: "4xl" })}>
      <p className={css({ fontSize: "3xl", textAlign: "center", p: "8" })}>
        View Letters
      </p>
      <div className={flex({ direction: "column" })}>
    <div 
      className={css({
        background: "amber.300",
        width: "100%",
        height: "20rem",
        padding: "12px 20px",
        border: "2px solid black",
        resize: "none",
        whiteSpace: "pre-wrap",
        _focus: {
          outline: "none",
        },
        _dark: {
          color:"black"
        }
      })}
    ></div>
      <div className={stack({ direction: "row", justify: "space-between"})}>
        <div className={flex({ justify: "beginning", gap: 2 })}></div>
        <div className={spacer()}></div>
    </div>
    </div>
    </div>
  );
}