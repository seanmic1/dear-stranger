import Link from "next/link";
import { css } from "../../../../styled-system/css";
import { center, container } from "../../../../styled-system/patterns";

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Write fail',
  description: 'Dear Stranger - write fail',
}

export default function writeSuccess() {
  return (
    <div className={container({maxW: "4xl"})}>
      <p className={css({fontSize:"3xl", textAlign: "center", p:"8"})}>
        Something went wrong!
      </p>
      <Link href="/">
        <div
          className={center({
            m:"20",
            padding: "2",
            rounded: "md",
            background: "amber.300",
            border: "2px solid transparent",
            boxSizing: "border-box",
            _hover: {
              border: "2px solid black",
            },
            color: "black",
          })}
        >
          Back to home
        </div>
      </Link>
    </div>
  )
}
