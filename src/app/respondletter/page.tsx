import React from 'react'
import RespondLetter from '../components/RespondLetter'

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Respond letter',
  description: 'Dear Stranger - respond to anonymous letters',
}

export default function page() {
  return (
    <RespondLetter></RespondLetter>
  )
}
