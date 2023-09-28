import { css } from "../../../styled-system/css";
import { FlexStyles, flex, spacer } from "../../../styled-system/patterns";
import Link from "next/link";
import { getServerSession } from "next-auth";
import options from "../api/auth/[...nextauth]/options";
import { SystemStyleObject } from "@pandacss/dev";
import { cookies } from "next/headers";
import Image from "next/image";
import ColorModeButton from "./ColorModeButton";

export default async function Navbar() {
  const session = await getServerSession(options);

  const signButton: SystemStyleObject = {
    border: "1px solid black",
    px: 4,
    py: 2,
    rounded: "sm",
    _focus: {
      background: "gray.200",
    },
    _hover: {
      transform: "scale(1.01)",
      boxShadow: "0 5px 10px 0 rgba(0,0,0,0.19)",
      transition: "all ease 0.1s",
    },
    background: {base: "gray.200", _dark: "gray.700"}
  };

  // async function setCookieTheme(formData: FormData) {
  //   "use server";
  //   const cookieStore = cookies();
  //   const theme = cookieStore.get("theme");
  //   if (theme === undefined) {
  //     cookieStore.set("theme", "light");
  //   }

  //   if (theme?.value === "light") {
  //     cookieStore.set("theme", "dark");
  //   }

  //   if (theme?.value === "dark") {
  //     cookieStore.set("theme", "light");
  //   }
  // }

  if (session !== null) {
    return (
      <div className={flex({ height: "60px", gap: 8, padding: 4 })}>
        <Link href="/" className={css({ alignSelf: "center" })}>
          <Image
            src="/dslogo.png"
            width={100}
            height={100}
            alt="Dear Stranger Logo"
            className={css({ p: 2 })}
          ></Image>
        </Link>

        <p>Logged in as: {session?.user?.email}</p>

        <div className={spacer()}></div>
        
        <div>
          <div className={css(signButton)}>
            <ColorModeButton></ColorModeButton>
          </div>
        </div>

        <Link href="/api/auth/signout">
          <div className={css(signButton)}>LOG OUT</div>
        </Link>
      </div>
    );
  } else {
    return (
      <div
        className={flex({
          height: "60px",
          gap: 8,
          padding: 4,
        })}
      >
        <Link href="/" className={css({ alignSelf: "center" })}>
          <Image
            src="/dslogo.png"
            width={100}
            height={100}
            alt="Dear Stranger Logo"
            className={css({ p: 2 })}
          ></Image>
        </Link>

        <div className={spacer()}></div>

        <div>
          <div className={css(signButton)}>
            <ColorModeButton></ColorModeButton>
          </div>
        </div>

        <Link href={"/api/auth/signin"}>
          <div className={css(signButton)}>SIGN IN / SIGN UP</div>
        </Link>
      </div>
    );
  }
}
