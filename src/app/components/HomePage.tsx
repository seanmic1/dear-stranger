import Link from "next/link";
import { CenterStyles, center, stack } from "../../../styled-system/patterns";
import WriteRespondButton from "./WriteRespondButton";
import { css } from "../../../styled-system/css";
import prisma from "@/lib/prisma";

export default function HomePage() {

  let lettersWritten = prisma.letter.count()
  let unrespondedLetters = prisma.letter.count({where:{responseContent: null}})

  return (
    <div
      className={css({
        height: "calc(100% - 60px)",
      })}
    >
      <div className={center({ p: 10, width: "100%" })}>
        <div className={stack({ direction: "column" })}>
          <p className={center({ fontWeight:"bold", p:4, textAlign:"center" })}>
            Write anonymized letters and get replies from fellow strangers!
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
        <div>
          <Link href={"/writeletter"}>
            <WriteRespondButton>Write a letter</WriteRespondButton>
          </Link>
          <p className={css({textAlign:"center", p:4, fontStyle: "italic"})}>{lettersWritten} letters written worldwide!</p>
        </div>
        <div>
          <Link href={"/respondletter"}>
            <WriteRespondButton>Respond to a letter</WriteRespondButton>
          </Link>
          <p className={css({textAlign:"center", p:4, fontStyle: "italic"})}>{unrespondedLetters} letters with no response!</p>
        </div>
      </div>
    </div>
  );
}
