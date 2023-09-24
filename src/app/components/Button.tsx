"use client";

import { css } from "../../../styled-system/css";

export default function Button() {
  return (
    <button
      id="mybut"
      type="submit"
      onClick={() => {const mybut = document.getElementById("mybut"); (mybut !== null ? mybut.innerHTML = "Sending..." : "error")}}
      className={css({
        padding: "2",
        rounded: "md",
        background: "blue.400",
        border: "2px solid transparent",
        boxSizing: "border-box",
        _hover: {
          border: "2px solid black",
        },
      })}
    >
      Send letter
    </button>
  );
}
