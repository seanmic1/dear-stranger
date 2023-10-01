"use client";

import { css } from "../../../styled-system/css";
import { CenterStyles, center } from "../../../styled-system/patterns";
import { useRef, useEffect } from "react";

export default function WriteRespondButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef(null);

  const buttonStyle: CenterStyles = {
    position: "relative",
    background: "amber.300",
    transition: "-webkit-transform ease-in-out 0.1s",
    color: "black",
    _hover: {
      transform: "scale(1.02)",
      transition: "all ease 0.3s",
      boxShadow: {
        base: "0 10px 20px 0 rgba(0,0,0,0.25)",
        _dark: "0 10px 20px 0 rgba(255,255,255,0.25)",
      },
    },
    base: {
      height: "12em",
      width: "20em",
    },
    md: {
      height: "300px",
      width: "500px",
    },
  };

  function changeToLoading() {
    const element: HTMLDivElement = ref.current as unknown as HTMLDivElement;
    element.style.pointerEvents = "none";
    element.textContent = "Loading...";
  }

  return (
    <div className="group">
      <div className={center(buttonStyle)} onClick={changeToLoading}>
        <div
          className={css({
            zIndex: 5,
            position: "absolute",
            base: {
              borderTop: "6em solid #ffbc31",
              borderLeft: "10em solid transparent",
              borderRight: "10em solid transparent",
            },
            md: {
              borderTop: "160px solid #ffbc31",
              borderLeft: "250px solid transparent",
              borderRight: "250px solid transparent",
            },
            height: 0,
            width: 0,
            top: 0,
            transformOrigin: "top",
            transition: "-webkit-transform ease-in-out 0.4s",
            _groupHover: {
              transform: "rotateX(160deg)",
            },
          })}
        ></div>
        <div
          className={css({
            position: "absolute",
            base: {
              borderTop: "6em solid #e5a92c",
              borderLeft: "10em solid transparent",
              borderRight: "10em solid transparent",
            },
            md: {
              borderTop: "160px solid #e5a92c",
              borderLeft: "250px solid transparent",
              borderRight: "250px solid transparent",
            },
            height: 0,
            width: 0,
            top: 0,
            transformOrigin: "top",
          })}
        ></div>
        <div
          ref={ref}
          className={css({ zIndex: "10", mt: "130px", fontSize: "2rem" })}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
