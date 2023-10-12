import "./globals.css";
import { Inter } from "next/font/google";

import SessionProvider from "./components/SessionProvider";
import { css } from "../../styled-system/css";
import Navbar from "./components/Navbar";
import GoogleAnalytics from "./components/GoogleAnalytics";

import Providers from "./components/providers"

import type { Metadata } from "next";
import Footer from "./components/Footer";
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

  if (process.env.MAINTENANCE_MODE === "1"){
    return (
      <html lang="en" suppressHydrationWarning>
      <body
        id="body"
        className={
          inter.className +
          " " +
          css({ background: { base: "white", _dark: "#161616" } })
        }
      >
        <GoogleAnalytics />
        <Providers>
          <SessionProvider>
              {children}
          </SessionProvider>
        </Providers>
      </body>
    </html>
    )
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body id="body" className={inter.className + " " + css({background: {base: "white", _dark:"#161616"}})}>
        <GoogleAnalytics />
        <Providers>
          <SessionProvider>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
          </SessionProvider>
        </Providers>
      </body>
    </html>
  );
}
