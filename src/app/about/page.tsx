import React from "react";
import About from "../components/About";

import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export const metadata: Metadata = {
  title: "About",
  description: "Dear Stranger - respond to anonymous letters",
};

export default function page() {
  return (
    <>
      <Navbar></Navbar>
      <About></About>
      <Footer></Footer>
    </>
  );
}
