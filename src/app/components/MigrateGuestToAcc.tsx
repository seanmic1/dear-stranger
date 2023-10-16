import { getServerSession } from "next-auth";
import React from "react";
import { SystemStyleObject } from "../../../styled-system/types";
import { cookies } from "next/headers";
import { center } from "../../../styled-system/patterns";
import { css } from "../../../styled-system/css";
import { decryptCookie } from "@/lib/CookieEncrypt";
import { RedirectType, redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import options from "../api/auth/[...nextauth]/options";
import { CustomSession } from "@/lib/CustomSession";

const signButton: SystemStyleObject = {
  border: { base: "2px solid black", _dark: "2px solid black" },
  color: "black",
  p: 2,
  px: 8,
  fontSize: { base: "1rem", md: "1rem" },
  rounded: "sm",
  _hover: {
    transform: "scale(1.01)",
    boxShadow: {
      base: "0 5px 10px 0 rgba(0,0,0,0.19)",
      _dark: "0 5px 10px 0 rgba(255,255,255,0.19)",
    },
    transition: "all ease 0.1s",
  },
  background: { base: "amber.300", _dark: "amber.300" },
};

async function handleYes() {
  "use server";

  const session = await getServerSession(options) as CustomSession

  const guestid = await decryptCookie();

  // if guestid is tampered
  if (guestid === "Error") {
    redirect("/fail");
  }

  // update letters by guestid to session id
  await prisma.letter.updateMany({
    where: { letterAuthorId: String(guestid) },
    data: {
      letterAuthorId: String(session.user?.id)
    }
  })

  // delete guest account
  await prisma.user.delete({
    where: {id: String(guestid)} 
  })

  cookies().delete("guestid")
  redirect("/viewletters")
}

async function handleNo() {
  "use server";

  const guestid = await decryptCookie();

  // delete guest account
  await prisma.user.delete({
    where: {id: String(guestid)} 
  })

  cookies().delete("guestid");

  redirect("/viewletters")
}

export default async function MigrateGuestToAcc() {
  const session = await getServerSession();

  const guestCookie = cookies().get("guestid");

  if (guestCookie === undefined) {
    return;
  }

  if (
    session !== null &&
    !session.user?.email?.endsWith("example.com") &&
    guestCookie
  ) {
    return (
      <div
        className={center({
          position: "absolute",
          background: {
            base: "rgba(255,255,255,0.9)",
            _dark: "rgba(0,0,0,0.9)",
          },
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          animation: "fadeIn 500ms",
        })}
      >
        <div
          className={css({
            textAlign: "center",
            position: "absolute",
            px: { base: "2rem", md: "none" },
          })}
        >
          <div className={css({ p: 2, m: 4 })}>
            It looks like you logged in from a Guest account,
            <br />
            would you like to migrate the letters to this account?
          </div>
          <div className={center({ gap: "3rem" })}>
            <form action={handleYes}>
              <button className={css(signButton)}>Yes, migrate letters.</button>
            </form>
            <form action={handleNo}>
              <button className={css(signButton)}>No, delete guest account.</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  return <></>;
}
