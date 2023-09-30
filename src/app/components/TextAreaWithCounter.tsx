"use client";

import { css } from "../../../styled-system/css";
import { flex, stack, center, spacer } from "../../../styled-system/patterns";

export default function TextAreaWithCounter({children}: {children?: string }) {
  const maximumCharacters = 900;

  function updateCharCount() {
    if (typeof window !== "undefined") {
      const textareaElement: HTMLTextAreaElement = document.getElementById(
        "textarea"
      ) as HTMLTextAreaElement;
      const typedcharsElement: HTMLParagraphElement = document.getElementById(
        "typedchars"
      ) as HTMLParagraphElement;

      typedcharsElement.textContent = String(textareaElement.value.length);

      return textareaElement.value.length
    }
    
  }

  return (
    <div className={flex({ direction: "column" })}>
      <textarea
        onKeyUp={updateCharCount}
        required
        defaultValue={children}
        id="textarea"
        name="content"
        maxLength={maximumCharacters}
        className={css({
          background: "amber.300",
          width: "100%",
          height: "20rem",
          padding: "12px 20px",
          border: "2px solid black",
          resize: "none",
          whiteSpace: "pre-wrap",
          _focus: {
            outline: "none",
          },
          _dark: {
            color:"black"
          }
        })}
      ></textarea>
        <div className={stack({ direction: "row", justify: "space-between"})}>
          <div className={flex({ justify: "beginning", gap: 2 })}>
            <p className={css({ textAlign: "left", height: "1.5rem",})}>Choose a country:&nbsp;</p>
          </div>
          <div className={spacer()}></div>
          <div id="counter" className={flex({ justify: "end", gap: 2 })}>
            <p id="character-counter" className={css({ textAlign: "right" })}>
              Characters left:
            </p>
            <p id="typedchars" ref={node => {updateCharCount()}}></p>
            <p>/</p>
            <p>{maximumCharacters}</p>
          </div>
        </div>
      </div>
  );
}