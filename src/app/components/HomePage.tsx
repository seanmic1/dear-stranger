import Link from "next/link";
import { CenterStyles, center, stack } from "../../../styled-system/patterns";
import WriteRespondButton from "./WriteRespondButton";
import { css } from "../../../styled-system/css";

export default function HomePage() {

  return (
    <div
      className={css({
        height: "calc(100% - 60px)",
      })}
    >
      <div className={center({ p: 10, width: "100%" })}>
        <div className={stack({ direction: "column" })}>
          <p className={center({ fontStyle: "italic", p:4, textAlign:"center" })}>
            Write anonymous letters and get replies from fellow strangers!
          </p>
        </div>
      </div>
      <div
        className={stack({
          width: "100%",
          direction: {base: "column", lg:"row"},
          justify: "center",
          gap: { base: "5rem", lg: "15%" },
          mt: "2rem",
          mb: "5rem"
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
