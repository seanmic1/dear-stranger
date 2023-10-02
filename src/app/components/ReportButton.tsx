"use client"

import { css } from "../../../styled-system/css";

export function handleReportResponse(){
  return confirm("Are you sure you want report? (The response will be marked as spam and your letter will be available for responses again)")
}

export function handleReportLetter(){
  return confirm("Are you sure you want report? (The letter will be marked as spam and will be subject to deletion)")
}

export function handleError(){
  return alert("Something went wrong")
}

export default function ReportButton() {
  return (
    <div className={css({display:"flex"})}>
      <button type="submit" className={css({ p:2, background: "red.500", my:2, border:"2px solid black", rounded:"md"})}>Report</button>
    </div>
  )
}
