import { css } from "../../../styled-system/css";
import {
  FlexStyles,
  center,
  flex,
  spacer,
} from "../../../styled-system/patterns";
import Link from "next/link";
import { getServerSession } from "next-auth";
import options from "../api/auth/[...nextauth]/options";
import { SystemStyleObject } from "@pandacss/dev";
import { cookies } from "next/headers";
import Image from "next/image";
import ColorModeButton from "./ColorModeButton";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNav from "./MobileNav";
import { signIn } from "next-auth/react";
import { CustomSession } from "@/lib/CustomSession";

export default async function Navbar() {
  const session = (await getServerSession(options)) as CustomSession;

  const signButton: SystemStyleObject = {
    border: { base: "2px solid black", _dark: "2px solid black" },
    color: "black",
    p: 2,
    fontSize: { base: "0.75rem", md: "1rem" },
    whiteSpace: "nowrap",
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
    display: { base: "none", md: "block" },
  };

  if (session !== null) {
    return (
      <div
        className={flex({
          justifyContent: "space-between",
          alignItems: "center",
        })}
      >
        <div
          className={flex({
            display: { base: "none", md: "block" },
            width: "1/3",
            p: 6,
          })}
        >
          <p>Signed in as: {session?.user?.name}</p>
        </div>

        <div
          className={flex({
            justifyContent:"left",
            display: { base: "block", md: "none" },
            width: "1/3",
          })}
        >
          <MobileNav></MobileNav>
        </div>

        <div className={flex({ width: "1/3", justifyContent: "center" })}>
          <Link href="/">
            <Image
              src="/dslogo.png"
              width={100}
              height={100}
              alt="Dear Stranger Logo"
              className={css({
                p:2,
                _hover: {
                  filter: {
                    base: "drop-shadow(0px 5px 10px rgba(0,0,0,0.25))",
                    _dark: "drop-shadow(0px 5px 10px rgba(255,255,255,0.25))",
                  },
                  transition: "all ease 0.1s",
                  transform: "scale(1.05)",
                },
              })}
            ></Image>
          </Link>
        </div>

        <div
          className={flex({
            width: "1/3",
            justifyContent: "right",
            pr: 6,
            gap: 4,
          })}
        >
          <div className={css(signButton)}>
            <ColorModeButton></ColorModeButton>
          </div>

          <Link href="/about">
            <div className={css(signButton)}>About</div>
          </Link>

          <Link href="/viewletters">
            <div className={css(signButton)}>View Letters</div>
          </Link>

          {session.user?.email?.endsWith("example.com") ? (
            <Link href="/api/auth/signin">
              <div className={css(signButton)}>Sign up</div>
            </Link>
          ) : (
            <Link href="/api/auth/signout">
              <div className={css(signButton)}>Log Out</div>
            </Link>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={flex({
          justifyContent: "space-between",
          alignItems: "center",
        })}
      >
        <div
          className={flex({
            width: "1/3",
            justifyContent: "left",
            display: { base: "none", md: "flex" },
            pl: 6,
            gap: 4,
          })}
        >
          
          <Link href="/signin">
            <div className={css(signButton)}>Sign in / Sign up</div>
          </Link>
        </div>

        <div
          className={flex({
            justifyContent:"left",
            display: { base: "flex", md: "none" },
            width: "1/3",
          })}
        >
          <MobileNav></MobileNav>
        </div>

        <div className={flex({ width: "1/3", justifyContent: "center" })}>
          <Link href="/">
            <Image
              src="/dslogo.png"
              priority={true}
              width={100}
              height={100}
              alt="Dear Stranger Logo"
              className={css({
                p:2,
                _hover: {
                  filter: {
                    base: "drop-shadow(0px 5px 10px rgba(0,0,0,0.25))",
                    _dark: "drop-shadow(0px 5px 10px rgba(255,255,255,0.25))",
                  },
                  transition: "all ease 0.1s",
                  transform: "scale(1.05)",
                },
              })}
            ></Image>
          </Link>
        </div>

        <div
          className={flex({
            width: "1/3",
            justifyContent: "right",
            pr: 6,
            gap: 4,
          })}
        >
          <div className={css(signButton)}>
            <ColorModeButton></ColorModeButton>
          </div>
          <Link href="/about">
            <div className={css(signButton)}>About</div>
          </Link>
        </div>
      </div>
    );
  }
}
