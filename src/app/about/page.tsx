import React from 'react'
import About from '../components/About'

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'About',
  description: 'Dear Stranger - respond to anonymous letters',
}

export default function page() {
  return (
    <About></About>
  )
}