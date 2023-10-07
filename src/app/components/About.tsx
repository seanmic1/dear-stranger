import { FormEvent } from "react";
import { css } from "../../../styled-system/css";
import {
  container,
  flex,
  stack,
  spacer,
  center
} from "../../../styled-system/patterns";

const headerStyle = { fontSize: "xl", textAlign: "left", fontWeight:"bold", mt:8, mb:2 }

export default async function About() {
  
    return (
      <div className={container({ maxW: "4xl" })}>
        
        <p className={css({ fontSize: "3xl", textAlign: "center", p: "4", mt:"12", fontWeight:"bolder" })}>
          Credits
        </p>
        <p>
          Sean Michael
          <br/>
          Amirul Azizol
        </p>
      </div>
    );
  }