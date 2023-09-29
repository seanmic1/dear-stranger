import "./globals.css";
import { Inter } from "next/font/google";

import SessionProvider from "./components/SessionProvider";
import { css } from "../../styled-system/css";
import Navbar from "./components/Navbar";
import GoogleAnalytics from "./components/GoogleAnalytics";

import Providers from "./components/providers"

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dear Stranger Home",
  description: "Dear Stranger - write anonymous letters",
};

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className + " " + css({background: {base: "white", _dark:"#161616"}})}>
        <Providers>
          <GoogleAnalytics />
          <SessionProvider>
            <Navbar></Navbar>
            {children}
          </SessionProvider>
        </Providers>
      </body>
    </html>
  );
}
