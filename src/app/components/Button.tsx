"use client";

import { css } from "../../../styled-system/css";

export function handleSubmit(){

  alert("You will recieve an email when your letter gets a response.")

}

export default function Button() {
  return (
    <button
      id="mybut"
      type="submit"
      onClick={() => {const mybut = document.getElementById("mybut") as HTMLButtonElement; mybut.style.pointerEvents="none"; mybut.style.background="lightgray" ; mybut.innerHTML = "Sending..."}}
      className={css({
        color:"black",
        padding: "2",
        rounded: "md",
        background: "amber.300",
        border: {base:"2px solid black", _dark:"2px solid white"},
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
  );
}
