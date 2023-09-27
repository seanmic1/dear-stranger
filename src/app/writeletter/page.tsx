import WriteLetter from "../components/WriteLetter";

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Write letter',
  description: 'Dear Stranger - write anonymous letters',
}

export default function page() {
  return (
    <WriteLetter></WriteLetter>
  )
}
