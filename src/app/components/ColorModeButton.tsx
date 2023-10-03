"use client";

import { useTheme } from "next-themes";
import { css } from "../../../styled-system/css";
import { BiSun, BiMoon } from "react-icons/bi";

export default function ColorModeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={css({color:"black"})}
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      {theme === "dark" ? <BiSun size={24}/> : <BiMoon size={24}/>}
    </div>
  );
}
