import { FormEvent } from "react";
import { css } from "../../../styled-system/css";
import {
  container,
  flex,
  stack,
  spacer,
  center
} from "../../../styled-system/patterns";
import Link from "next/link";

const headerStyle = { fontSize: "xl", textAlign: "left", fontWeight:"bold", mt:8, mb:2 }

export default async function About() {
  
    return (
      <div className={container({ maxW: "4xl" })}>
        <p className={css({ fontSize: "3xl", textAlign: "center", p: "4", mt:"12", fontWeight:"bolder" })}>
          FAQ
        </p>
        <p className={css(headerStyle)}>
          What is Dear Stranger?
        </p>
        <p>
          Dear Stranger is about letting people send anonymized letters to be answered by absolutely anyone in the world! 
          You can use it to share an idea, tell a joke, confess secrets, or really whatever it is you want to say. 
          <br></br>As long as it&apos;s not offensive, anything goes!
        </p>
        <p className={css(headerStyle)}>
          Why was it made?
        </p>
        <p>
          Simply put, I made this app because I wanted to get into web development. I came up with the idea of Dear Stranger after I realized that there aren't many places you can say dump some words and get a response about it with full anonymity between you and the reader. Thus, Dear Stranger was born.
        </p>
        <p className={css(headerStyle)}>
          How to use it?
        </p>
        <p>
          Just create an account and start writing letters or respond to letters. Simple as that!
          <br></br>
          You may select a country to let those who read your letters / responses to know where the letter is written from!<br></br>
          When your letter recieves a response, you will recieve an email to let you know.
        </p>
        <p className={css(headerStyle)}>
          How was it built?
        </p>
        <p>
          The web app is hosted on Vercel and is built with NextJS, a React framework. It uses PandaCSS as the CSS component framework. 
          <br></br>
          For the backend, it uses the Prisma Client and ORM to connect and send requests to an AWS RDS Database running PostgreSQL.
          <br></br>
          It also uses NextAuth to handle User Authentication and nodemailer to send emails.
        </p>
        <p className={css({ fontSize: "3xl", textAlign: "center", p: "4", mt:"5", fontWeight:"bolder" })}>
          Credits
        </p>
        <p className={css({textAlign: "center"})}>
          Sean Michael
          <br/>
          Amirul Azizol
        </p>
        <p className={css({ fontSize: "3xl", textAlign: "center", p: "4", mt:"5", fontWeight:"bolder" })}>
          Legal information
        </p>
        <p className={css({textAlign: "center", color: "blue.500"})}>
          <Link href={"/terms"}>Terms of Service</Link>
          <br/>
          <Link href={"/privacy"}>Privacy Policy</Link>
        </p>
      </div>
    );
  }