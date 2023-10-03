"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { css } from "../../../styled-system/css";
import React, { useState } from "react";
import { flex, stack } from "../../../styled-system/patterns";
import { useSession } from "next-auth/react";
import Link from "next/link";
import ColorModeButton from "./ColorModeButton";

const buttonStyle = {
  mx: 2,
  p: 4,
  background: "amber.400",
  rounded: "md",
  _hover: { background: "amber.200" },
};

export default function MobileNav() {
  const [isShown, setIsShown] = useState(false);

  const session = useSession();

  const MobileNavStyle = {
    position: "fixed",
    left: "-100%",
    top: 0,
    bottom: 0,
    right: "100%",
    background: "yellow.300",
    zIndex: "100",
    transition: "all ease 0.3s",
    _expanded: {
      left: 0,
      right: "25%",
    },
  };

  const toggleMenu = () => {
    setIsShown((current) => !current);
  };

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

      <div aria-expanded={isShown} className={css(MobileNavStyle)}>
        <div className={flex({ justifyContent: "space-between", p: 4 })}>
          <ColorModeButton></ColorModeButton>
          <div onClick={toggleMenu}>
            <AiOutlineClose className={css({color:"black"})} size={24}></AiOutlineClose>
          </div>
        </div>
        {session.status !== "unauthenticated" ? (
          <div className={css({ padding: 4 })}>
            <p className={css({ color: "black" })}>
              Logged in as: <br></br> {session.data?.user?.email}
            </p>
          </div>
        ) : (
          <></>
        )}

        <div className={stack({ padding: 4, direction: "column" })}>
          {session.status === "unauthenticated" ? (
            <>
              <Link href="/api/auth/signin" className={css(buttonStyle)}>
                <p className={css({color:"black"})}>Sign in / Sign up</p>
              </Link>
            </>
          ) : (
            <>
              <Link href="/about" className={css(buttonStyle)}>
                <p className={css({color:"black"})}>About</p>
              </Link>
              <Link href="/viewletters" className={css(buttonStyle)}>
                <p className={css({color:"black"})}>View letters</p>
              </Link>
              <Link href="/api/auth/signout" className={css(buttonStyle)}>
                <p className={css({color:"black"})}>Sign out</p>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
