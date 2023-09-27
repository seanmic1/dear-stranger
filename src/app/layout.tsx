import './globals.css'
import { Inter } from 'next/font/google'

import SessionProvider from "./components/SessionProvider"
import { css } from '../../styled-system/css'
import Navbar from './components/Navbar'
import GoogleAnalytics from './components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Dear Stranger Home',
  description: 'Dear Stranger - write anonymous letters',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className={css({height:"full"})}>
      <body className={inter.className}>
        <GoogleAnalytics />
        <SessionProvider>
          <Navbar></Navbar>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
