"use client";

import { useTheme } from "next-themes";

import { BiSun, BiMoon } from "react-icons/bi";

export default function ColorModeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      {theme === "dark" ? <BiSun size={24}/> : <BiMoon size={24}/>}
    </div>
  );
}
