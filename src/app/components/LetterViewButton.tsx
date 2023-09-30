"use client";

import { css } from "../../../styled-system/css";
import { CenterStyles, center } from "../../../styled-system/patterns";
import { useRef, useEffect } from "react";
import DeleteButton from "./DeleteButton";

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
    rounded: "sm",
    _hover: {
      transform: "scale(1.02)",
      transition: "all ease 0.3s",
      boxShadow: {
        base: "0 10px 20px 0 rgba(0,0,0,0.25)",
        _dark: "0 10px 20px 0 rgba(255,255,255,0.25)",
      },
    },
    base: {
        height: "8em", 
        width: "16em",  
      },
      md: {
        height: "120px", 
        width: "400px", 
      },
  };

  function changeToLoading() {
    const element: HTMLDivElement = ref.current as unknown as HTMLDivElement;
    element.style.pointerEvents = "none";
    element.textContent = "Loading...";
  }

  return (
    <div className="group">
      <div className={center(buttonStyle)}>
        <div ref={ref} className={css({ zIndex: "10", mt: "1rem", fontSize: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center" })}>
          <div style={{ paddingRight: "1rem" }}>{children}</div>
          <div className={css({ fontSize: "1rem" })}><DeleteButton></DeleteButton></div>
        </div>
      </div>
    </div>
  );  
}  
