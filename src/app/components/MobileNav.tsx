"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { css } from "../../../styled-system/css";
import React, { useState } from "react";
import { flex, stack } from "../../../styled-system/patterns";
import { useSession } from "next-auth/react";
import Link from "next/link";
import ColorModeButton from "./ColorModeButton";

export default function MobileNav() {
  const [isShown, setIsShown] = useState(false);

  const session = useSession();

  const toggleMenu = () => {
    setIsShown((current) => !current);
  };

  if (session.status === "unauthenticated") {
    return (
      <nav
      className={css({
        width: "1/4",
        pl: "2em",
        base: { position: "relative", display: "block" },
        md: { position: "absolute", display: "none" },
      })}
    >
      <div onClick={toggleMenu}>
        <GiHamburgerMenu size={30}></GiHamburgerMenu>
      </div>

      <div
        aria-expanded={isShown}
        className={css({
          position: "fixed",
          left: "-100%",
          top: 0,
          bottom: 0,
          right: "100%",
          background: "amber.300",
          zIndex: "100",
          transition: "all ease 0.3s",
          _expanded: {
            left: 0,
            right: "25%",
          },
        })}
      >
        <div className={flex({ justifyContent: "space-between", p: 4 })}>
          <ColorModeButton></ColorModeButton>
          <div onClick={toggleMenu}>
            <AiOutlineClose size={24}></AiOutlineClose>
          </div>
        </div>
        <div className={stack({ padding: 4, direction: "column" })}>
          <Link href="/api/auth/signin" className={css()}>
            <p>Sign in / Sign up</p>
          </Link>
        </div>
      </div>
    </nav>
    )
  } 

  return (
    <nav
      className={css({
        width: "1/4",
        pl: "2em",
        base: { position: "relative", display: "block" },
        md: { position: "absolute", display: "none" },
      })}
    >
      <div onClick={toggleMenu}>
        <GiHamburgerMenu size={30}></GiHamburgerMenu>
      </div>

      <div
        aria-expanded={isShown}
        className={css({
          position: "fixed",
          left: "-100%",
          top: 0,
          bottom: 0,
          right: "100%",
          background: "amber.300",
          zIndex: "100",
          transition: "all ease 0.3s",
          _expanded: {
            left: 0,
            right: "25%",
          },
        })}
      >
        <div className={flex({ justifyContent: "space-between", p: 4 })}>
          <ColorModeButton></ColorModeButton>
          <div onClick={toggleMenu}>
            <AiOutlineClose size={24}></AiOutlineClose>
          </div>
        </div>
        <div className={css({ padding: 4 })}>
          <p>
            Logged in as: <br></br> {session.data?.user?.email}
          </p>
        </div>
        <div className={stack({ padding: 4, direction: "column" })}>
          <Link href="/api/auth/signout" className={css()}>
            <p>Sign out</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}
