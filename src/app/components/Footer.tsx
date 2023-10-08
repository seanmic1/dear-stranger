import Link from "next/link";
import { css } from "../../../styled-system/css";
import { center, flex } from "../../../styled-system/patterns";
//https://github.com/seanmic1/dear-stranger/issues
export default function Footer() {
  return (
    <div className={flex({ justifyContent: "space-between" })}>
      <div className={css({ ml: 4, p: 4, bottom: 0 })}>
        Made by Sean Michael <br />{" "}
        <a href="https://seanml.com" className={css({ color: "blue.500" })}>
          seanml.com
        </a>
      </div>
      <div className={center({ mr: 4, p: 2, color: "red.500"})}>
        <Link href={"https://github.com/seanmic1/dear-stranger/issues"}>
          Report a bug
        </Link>
      </div>
    </div>
  );
}
