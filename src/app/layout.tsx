import "./globals.css";
import { Inter } from "next/font/google";

import SessionProvider from "./components/SessionProvider";
import { css } from "../../styled-system/css";
import GoogleAnalytics from "./components/GoogleAnalytics";

import Providers from "./components/providers";

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
      <body
        id="body"
        className={
          inter.className +
          " " +
          css({ background: { base: "white", _dark: "#121212" } })
        }
      >
        <GoogleAnalytics />
        <Providers>
          <SessionProvider>{children}</SessionProvider>
        </Providers>
      </body>
    </html>
  );
}
