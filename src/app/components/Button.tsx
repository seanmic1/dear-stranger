"use client";

import { css } from "../../../styled-system/css";
import { flex } from "../../../styled-system/patterns";
import ReCAPTCHA from "react-google-recaptcha";
import { verifyCaptcha } from "@/lib/serverActions";
import { useRef, useState } from "react";
import { getSession, useSession } from "next-auth/react";

export default function Button() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsverified] = useState<boolean>(false);
  const session =  useSession()

  async function handleCaptchaSubmission(token: string | null) {
    // Server function to verify captcha
    await verifyCaptcha(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(false));
  }

  if (session.data?.user?.email?.endsWith("example.com")){
    return (
      <div className={flex({gap:"2rem", direction:{base:"column",md:"row"}})}>
        <div className={css({ height: "60px" })}>
          <ReCAPTCHA
            sitekey="6LcqYogoAAAAALWAvAKgTMioOKAtGij1l9AxI2oC"
            ref={recaptchaRef}
            onChange={handleCaptchaSubmission}
          />
        </div>
  
        <button
          id="mybut"
          type="submit"
          disabled={!isVerified}
          onClick={() => {
            const mybut = document.getElementById("mybut") as HTMLButtonElement;
            mybut.style.pointerEvents = "none";
            mybut.style.background = "lightgray";
            mybut.innerHTML = "Sending...";
          }}
          className={css({
            color: "black",
            padding: "2",
            rounded: "md",
            background: "amber.300",
            border: { base: "2px solid black", _dark: "2px solid white" },
            boxSizing: "border-box",
            _hover: {
              transform: "scale(1.01)",
              boxShadow: {
                base: "0 5px 10px 0 rgba(0,0,0,0.19)",
                _dark: "0 5px 10px 0 rgba(255,255,255,0.19)",
              },
              transition: "all ease 0.1s",
            },
          })}
        >
          Send letter
        </button>
      </div>
    );
  }

  return (
    <div className={flex({gap:"2rem", direction:{base:"column",md:"row"}})}>

      <button
        id="mybut"
        type="submit"
        onClick={() => {
          const mybut = document.getElementById("mybut") as HTMLButtonElement;
          mybut.style.pointerEvents = "none";
          mybut.style.background = "lightgray";
          mybut.innerHTML = "Sending...";
        }}
        className={css({
          color: "black",
          padding: "2",
          rounded: "md",
          background: "amber.300",
          border: { base: "2px solid black", _dark: "2px solid white" },
          boxSizing: "border-box",
          _hover: {
            transform: "scale(1.01)",
            boxShadow: {
              base: "0 5px 10px 0 rgba(0,0,0,0.19)",
              _dark: "0 5px 10px 0 rgba(255,255,255,0.19)",
            },
            transition: "all ease 0.1s",
          },
        })}
      >
        Send letter
      </button>
    </div>
  );
}
