import "./globals.css";
import { Inter } from "next/font/google";

import SessionProvider from "./components/SessionProvider";
import { css } from "../../styled-system/css";
import Navbar from "./components/Navbar";
import GoogleAnalytics from "./components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });
import { CSSProperties } from "react";
import { getServerSession } from "next-auth";
import options from "./api/auth/[...nextauth]/options";

import { cookies } from 'next/headers'

import type { Metadata } from "next";
import { RequestCookies } from "next/dist/compiled/@edge-runtime/cookies";
export const metadata: Metadata = {
  title: "Dear Stranger Home",
  description: "Dear Stranger - write anonymous letters",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const theme = cookies().get("theme")

  const themeStyle: CSSProperties = {
    colorScheme: theme === undefined ? "light" : theme.value
  }

  return (
    <html lang="en" style={themeStyle} data-color-mode={theme === undefined ? "light" : theme.value}>
      <body className={inter.className + " " + css({background: {base: "white", _dark:"#121212"}})}>
        <GoogleAnalytics />
        <SessionProvider>
          <Navbar></Navbar>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
