"use client";

import {
  ClientSafeProvider,
  LiteralUnion,
  getProviders,
  signIn,
  signOut,
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
import { useTheme } from "next-themes";

export default function SignOut() {

  return (
    <div
      className={flex({
        height: "100vh",
        p: 4,
        background: {base: "amber.300", _dark: "#121212"},
        justifyContent: "center",
        alignItems: "center",
        color: "black"
      })}
    >
      <div
        className={css({
          minW: "25%",
          background: {base:"white", _dark: "amber.300"},
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
          Are you sure you want to sign out?
        </div>
        <div className={stack({ gap: 4 })}>
          
            <button
            className={css({
              background: {base: "amber.300", _dark: "amber.200"},
              rounded: "lg",
              p: 4,
              border: "2px solid black",
              color: "black"
            })}
              onClick={() => {
                signOut({callbackUrl: "/"})
              }}
            >
              Sign out
            </button>

      
        </div>
        <div className={css({ p: 4, color: "blue.500" })}>
          <Link href={"/"}>Cancel</Link>
        </div>
      </div>
    </div>
  );
}
