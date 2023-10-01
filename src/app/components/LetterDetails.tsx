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
      height: "3rem",
      width: "18rem",
    },
    md: {
      height: "60px",
      width: "360px",
    },
    border: {base:"2px solid black", _dark:"2px solid white"},
  };

  const baseStyles = css({
    zIndex: "10",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    base: {
      flexDirection: "column",
      textAlign: "center",
    },
  });

  return (
    <div className="group">
      <div className={center(buttonStyle)}>
        <div className={baseStyles}>
          <div style={{ paddingRight: "1rem" }}>{children}</div>
        </div>
      </div>
    </div>
  );
}
