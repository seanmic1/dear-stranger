import { css } from "../../../styled-system/css";
import { FlexStyles, flex, spacer } from "../../../styled-system/patterns";
import Link from "next/link";
import { getServerSession } from "next-auth";
import options from "../api/auth/[...nextauth]/options";
import { SystemStyleObject } from "@pandacss/dev";

export default async function Navbar() {
  const session = await getServerSession(options);

  const signButton: SystemStyleObject = {
    border: "1px solid black",
    px: 4,
    rounded: "sm",
    _focus:{
      background: "gray.200"
    },
    _hover:{
      transform: "scale(1.01)",
      boxShadow: "0 5px 10px 0 rgba(0,0,0,0.19)",
      transition: "all ease 0.1s"
    }
  };

  if (session !== null) {
    return (
      <div className={flex({ height: "60px", gap: 8, padding: 4 })}>
        <p>Logged in as: {session?.user?.email}</p>
        <div className={spacer()}></div>
        <Link href="/">
          <div className={css(signButton)}>HOME</div>
        </Link>
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
          <div className={css(signButton)}>SIGN IN / SIGN UP</div>
        </Link>
      </div>
    );
  }
}
