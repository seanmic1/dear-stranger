"use client";

import { useSession } from "next-auth/react";
import React from "react";
import { css } from "../../../styled-system/css";
import { center, stack } from "../../../styled-system/patterns";
import { SystemStyleObject } from "@pandacss/dev";
import { CookiesProvider, useCookies } from "react-cookie";

export default function WarnAnonymous() {
  const session = useSession();

  const [cookies, setCookie] = useCookies(["acknowledgeAnon"]);

  if (cookies.acknowledgeAnon === undefined) {
    setCookie("acknowledgeAnon", false);
  }

  const acknowledgeCookie = cookies.acknowledgeAnon;

  function handleAcknowledge() {
    setCookie("acknowledgeAnon", true);
  }

  const signButton: SystemStyleObject = {
    border: { base: "2px solid black", _dark: "2px solid white" },
    color: "black",
    p: 2,
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

  if (
    session.data?.user?.email?.endsWith("example.com") &&
    acknowledgeCookie === false
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
          <b className={css({ fontSize: "2rem", fontWeight: 600 })}>Warning!</b>
          <div className={css({ p: 2 })}>
            <br />
            Your guest account is valid for <b>7 days</b>, after which it will
            be deleted.
            <br />
            You will also lose access to this account if you{" "}
            <b className={css({ color: "red" })}>clear cache</b> or {" "}
            <b className={css({ color: "red" })}>log out</b>.
          </div>
          <div className={css({ m: 4 })}>
            Sign in / sign up to transfer this
            account&apos;s letters to your account.
          </div>
          <div className={center()}>
            <button className={css(signButton)} onClick={handleAcknowledge}>
              I understand, do not show again.
            </button>
          </div>
        </div>
      </div>
    );
  }
  return <></>;
}
