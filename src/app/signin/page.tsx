"use client";

import { BuiltInProviderType } from "next-auth/providers/index";
import {
  ClientSafeProvider,
  LiteralUnion,
  getProviders,
  signIn,
  useSession,
} from "next-auth/react";
import { css } from "../../../styled-system/css";
import {
  center,
  container,
  flex,
  stack,
} from "../../../styled-system/patterns";
import Image from "next/image";
import Link from "next/link";
import ColorModeButton from "../components/ColorModeButton";
import { useTheme } from "next-themes";

const signInOptionStyle = {
  background: { base: "amber.300", _dark: "amber.200" },
  rounded: "lg",
  p: 4,
  border: "2px solid black",
  color: "black",
};

export default function SignIn() {
  const session = useSession();

  return (
    <div
      className={flex({
        height: "100vh",
        p: 4,
        background: { base: "amber.300", _dark: "#121212" },
        justifyContent: "center",
        alignItems: "center",
        color: "black",
      })}
    >
      <div
        className={css({
          minW: "25%",
          background: { base: "white", _dark: "amber.300" },
          rounded: "lg",
          textAlign: "center",
          p: 8,
          border: "2px solid black",
        })}
      >
        <div className={center()}>
          <Image
            src={"/dslogo.png"}
            alt="Dear Stranger Logo"
            width={100}
            height={100}
          ></Image>
        </div>
        <div
          className={css({
            p: 4,
            fontSize: "1.5rem",
            fontWeight: "extrabold",
            mb: 4,
          })}
        >
          Sign in
        </div>
        <div className={stack({ gap: 2 })}>
          {session.data?.user?.email?.endsWith("example.com") ? (
            <></>
          ) : (
            <button
              className={css(signInOptionStyle)}
              onClick={() => {
                signIn("credentials", { callbackUrl: "/" });
              }}
            >
              Use a Guest Account <br /> (No sign in required)
            </button>
          )}
          <button
            className={css(signInOptionStyle)}
            onClick={() => {
              signIn("google", { callbackUrl: "/" });
            }}
          >
            Sign in with Google
          </button>
          <button
            className={css(signInOptionStyle)}
            onClick={() => {
              signIn("github", { callbackUrl: "/" });
            }}
          >
            Sign in with Github
          </button>
        </div>
        <div className={css({ p: 4, color: "blue.500" })}>
          <Link href={"/signup"}>Or sign up</Link>
        </div>
      </div>
    </div>
  );
}
