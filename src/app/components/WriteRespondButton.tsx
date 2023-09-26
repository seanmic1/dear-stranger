"use client"

import { CenterStyles, center } from "../../../styled-system/patterns";
import {useRef, useEffect} from 'react';

export default function WriteRespondButton({
  children,
}: {
  children: React.ReactNode
}) {

  const ref = useRef(null);

  const buttonStyle: CenterStyles = {
    height: "300px",
    width: "500px",
    border: "1px solid black",
    background: "amber.300",
    rounded: "lg",
    _focus:{
      background: "gray.200"
    },
    _hover:{
      transform: "scale(1.01)",
      boxShadow: "0 5px 10px 0 rgba(0,0,0,0.19)",
      transition: "all ease 0.1s"
    }
  };

  function changeToLoading() { 
    const element: HTMLDivElement = ref.current as unknown as HTMLDivElement;
    element.style.background = "lightgray"
    element.style.pointerEvents = "none"
    element.textContent = "Loading..."
  }

  return (
    <div ref={ref} className={center(buttonStyle)} onClick={changeToLoading}>{children}</div>
  )
}
