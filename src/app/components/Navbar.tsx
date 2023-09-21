"use client";

import { useSession } from "next-auth/react";
import { css } from "../../../styled-system/css";
import { flex, spacer } from "../../../styled-system/patterns";
import Link from "next/link";

export default function Navbar() {
  const { data: session, status } = useSession();

  const signButton = {
    border: "1px solid black",
    px: 4,
  };

  if (status === "authenticated") {
    return (
      <div className={flex({ height: "60px", gap: 8, padding: 4 })}>
        <p>Logged in as: {session?.user?.name}</p>
        <div className={spacer()}></div>
        <Link href="/api/auth/signout">
          <div className={css(signButton)}>LOG OUT</div>
        </Link>
      </div>
    );
  } else {
    return (
      <div className={flex({ height: "60px", gap: 8, padding: 4 })}>
        <div className={spacer()}></div>
        <Link href={"/api/auth/signin"}>
          <div className={css(signButton)}>SIGN IN</div>
        </Link>
        <Link href={"/api/auth/signup"}>
          <div className={css(signButton)}>SIGN UP</div>
        </Link>
      </div>
    );
  }
}
