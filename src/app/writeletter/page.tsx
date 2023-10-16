import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WriteLetter from "../components/WriteLetter";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Write letter",
  description: "Dear Stranger - write anonymous letters",
};

export default function page() {
  return (
    <>
      <Navbar></Navbar>
      <WriteLetter></WriteLetter>
      <Footer></Footer>
    </>
  );
}
