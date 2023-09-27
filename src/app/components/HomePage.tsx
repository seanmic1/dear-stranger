import Link from "next/link";
import { CenterStyles, center, stack } from "../../../styled-system/patterns";
import WriteRespondButton from "./WriteRespondButton";
import { css } from "../../../styled-system/css";

export default function HomePage() {
  const buttonStyle: CenterStyles = {
    height: "300px",
    width: "400px",
    border: "1px solid black",
    rounded: "lg",
    _focus: {
      background: "gray.200",
    },
    _hover: {
      transform: "scale(1.01)",
      boxShadow: "0 5px 10px 0 rgba(0,0,0,0.19)",
      transition: "all ease 0.1s",
    },
  };

  return (
    <div
      className={css({
        height: "calc(100% - 60px)",
      })}
    >
      <div className={center({ p: 10, width: "100%" })}>
        <div className={stack({ direction: "column" })}>
          <p className={center({ fontStyle: "italic", p:4 })}>
            Write anonymous letters and get replies from fellow strangers!
          </p>
        </div>
      </div>
      <div
        className={stack({
          width: "100%",
          direction: {base: "column", md:"row"},
          justify: "center",
          gap: "15%",
        })}
      >
        <div className={center({})}>
          <Link href={"/writeletter"}>
            <WriteRespondButton>Write a letter</WriteRespondButton>
          </Link>
        </div>
        <div className={center()}>
          <Link href={"/respondletter"}>
            <WriteRespondButton>Respond to a letter</WriteRespondButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
