import React from "react";
import Cover from "../components/Cover/Cover";
import Website from "../components/Website/Website";
import Stack from "../components/Stack/Stack";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Cover />
      <Website />
      <Stack />
      <Contact />
      <Footer />
    </>
  );
}
