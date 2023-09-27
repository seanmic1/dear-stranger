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
    height: "300px",
    width: "500px",
    background: "amber.300",
    transition: "-webkit-transform ease-in-out 0.1s",
    fontFamily: "monospace",
    fontWeight: "extralight",
    _hover: {
      transform: "scale(1.01)",
      boxShadow: "0 5px 10px 0 rgba(0,0,0,0.19)",
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
            borderTop: "160px solid #ffbc31",
            borderLeft: "250px solid transparent",
            borderRight: "250px solid transparent",
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
            borderTop: "160px solid #edb135",
            borderLeft: "250px solid transparent",
            borderRight: "250px solid transparent",
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
