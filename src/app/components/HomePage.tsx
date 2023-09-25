import Link from "next/link";
import {
  CenterStyles,
  center,
  container,
  flex,
  linkBox,
  stack,
} from "../../../styled-system/patterns";

export default function HomePage() {
  const buttonStyle: CenterStyles = {
    height: "300px",
    width: "400px",
    border: "1px solid black",
    rounded: "lg",
    _focus:{
      background: "gray.200"
    },
    _hover:{
      transform: "scale(1.01)",
      boxShadow: "0 5px 10px 0 rgba(0,0,0,0.19)",
      transition: "all ease 0.1s"
    }
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
      <div className={center({})}>
        <Link href={"/writeletter"}>
          <div className={center(buttonStyle)}>Write a letter</div>
        </Link>
      </div>
      <div className={center()}>
        <Link href={"/respondletter"}>
          <div className={center(buttonStyle)}>Respond to a letter</div>
        </Link>
      </div>
    </div>
  );
}
