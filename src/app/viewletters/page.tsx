import React from "react";
import ViewLetters from "../components/ViewLetters";

import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export const metadata: Metadata = {
  title: "View letters",
  description: "Dear Stranger - respond to anonymous letters",
};

export default function page() {
  return (
    <>
      <Navbar></Navbar>
      <ViewLetters></ViewLetters>
      <Footer></Footer>
    </>
  );
}
