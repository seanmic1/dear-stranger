import React from "react";
import RespondLetter from "../components/RespondLetter";

import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export const metadata: Metadata = {
  title: "Respond letter",
  description: "Dear Stranger - respond to anonymous letters",
};

export default function page() {
  return (
    <>
      <Navbar></Navbar>
      <RespondLetter></RespondLetter>
      <Footer></Footer>
    </>
  );
}
