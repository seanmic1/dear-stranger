import React from 'react'
import ViewLetters from '../components/ViewLetters'

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'View letters',
  description: 'Dear Stranger - respond to anonymous letters',
}

export default function page() {
  return (
    <ViewLetters></ViewLetters>
  )
}