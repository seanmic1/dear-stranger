import Link from "next/link";
import {
  center,
  container,
  flex,
  linkBox,
  stack,
} from "../../../styled-system/patterns";
import { css } from "../../../styled-system/css";

export default function HomePage() {
  const buttonStyle = {
    height: "300px",
    width: "400px",
    border: "1px solid black",
    rounded: "lg",
  };

  return (
    <div
      className={stack({
        direction: "row",
        justify: "center",
        height: "calc(100% - 60px)",
        gap: "15%",
      })}
    >
      <div className={center()}>
        <Link href={"/writeletter"}>
          <div className={center(buttonStyle)}>Write letter</div>
        </Link>
      </div>
      <div className={center()}>
        <Link href={"/readletter"}>
          <div className={center(buttonStyle)}>Respond to a letter</div>
        </Link>
      </div>
    </div>
  );
}
