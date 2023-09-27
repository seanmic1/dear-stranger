import prisma from "@/lib/prisma";
import { css } from "../../../../styled-system/css";
import { center, container, stack } from "../../../../styled-system/patterns";
import { Letter } from "@prisma/client";
import { getServerSession } from "next-auth";
import options from "@/app/api/auth/[...nextauth]/options";

import type { Metadata } from 'next'
import { redirect } from "next/navigation";
export const metadata: Metadata = {
  title: 'Read Response',
  description: 'Dear Stranger - Read response',
}

export default async function ReadResponseID({
  params,
}: {
  params: { letterID: string };
}) {

  // get session
  const session = await getServerSession(options);
  
  // ask to login if no session
  if (!session){
    redirect("/api/auth/signin")
  }

  // check if session user has permission to read

  // get letter
  const letter = (await prisma.letter.findUnique({
    where: { id: Number(params.letterID) },
  })) as Letter;

  if (letter === null) {
    return <p className={center({ fontSize: "3xl", height:"calc(100% - 60px)"})}>
    Letter not found
  </p>;
  }

  if (!(session?.user?.email !== letter.letterAuthorEmail) && !(session?.user?.email !== letter.responseAuthorEmail)){
    return <>You do not have permission to read this letter</>
  }

  return (
    <div className={container({ maxW: "8xl" })}>
      <p className={css({ fontSize: "3xl", textAlign: "center", p: "8" })}>
        Read response
      </p>
      <div className={stack({ direction: {base:"column",md:"row"}, justifyContent: "center" })}>
        <div className={css({w:"100%"})}>
          <p className={css({p:2})}>Original letter</p>
          <p
            className={css({
              background: "amber.300",
              width: "100%",
              height: "20rem",
              padding: "12px 20px",
              border: "2px solid black",
              whiteSpace: "pre-wrap",
              _focus: {
                outline: "none",
              },
            })}
          >
            {letter.letterContent}
          </p>
        </div>
        <div className={css({w:"100%"})}>
        <p className={css({p:2})}>Response</p>
          <p
            className={css({
              background: "amber.300",
              width: "100%",
              height: "20rem",
              padding: "12px 20px",
              border: "2px solid black",
              whiteSpace: "pre-wrap",
              _focus: {
                outline: "none",
              },
            })}
          >
            {letter.responseContent}
          </p>
        </div>
      </div>
    </div>
  );
}
