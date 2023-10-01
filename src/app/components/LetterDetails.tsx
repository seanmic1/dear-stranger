import { css } from "../../../styled-system/css";
import { CenterStyles, center } from "../../../styled-system/patterns";
import { useRef, useEffect } from "react";

export default function LetterDetails({
  children,
}: {
  children: React.ReactNode;
}) {

  const buttonStyle: CenterStyles = {
    position: "relative",
    background: "amber.300",
    transition: "-webkit-transform ease-in-out 0.1s",
    color: "black",
    rounded: "sm",
    base: {
        height: "4rem", 
        width: "16rem",  
      },
      md: {
        height: "80px", 
        width: "320px", 
      },
  };

  return (
    <div className="group">
      <div className={center(buttonStyle)}>
        <div className={css({ zIndex: "10", mt: "1rem", fontSize: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center" })}>
          <div style={{ paddingRight: "1rem" }}>{children}</div>
        </div>
      </div>
    </div>
  );  
}  
