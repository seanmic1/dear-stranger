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
import LetterViewButton from "./LetterDetails";
import Link from "next/link";

export default function DeleteButton() {
  const signButton = {
    color: "white",
    p: 2,
    fontSize: {base: "0.8rem", md:"1rem"},
    rounded: "sm",
    background: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
    textAlign: "center",
    alignSelf: "end",
    _hover: {
        transform: "scale(1.01)",
        boxShadow: {
          base: "0 5px 10px 0 rgba(0,0,0,0.19)",
          _dark: "0 5px 10px 0 rgba(255,255,255,0.19)",
        },
        transition: "all ease 0.1s",
      },
    base: {
        height: "3rem", 
        width: "3.24rem",  
    },
    md: {
        height: "60px",
        width: "65px",
    },
    border: {base:"2px solid black", _dark:"2px solid white"},
  };

  return (
    <div className={css(signButton)}>
      Delete
    </div>
  );
}
