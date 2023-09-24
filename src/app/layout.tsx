import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { getServerSession } from 'next-auth'
import SessionProvider from "./components/SessionProvider"
import { css } from '../../styled-system/css'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dear Stranger',
  description: 'Dear Stranger - write anonymous letters',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession()

  return (
    <html lang="en" className={css({height:"full"})}>
      <body className={inter.className}>
        <SessionProvider>
          <Navbar></Navbar>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
