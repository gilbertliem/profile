import React from "react";
import Cover from "../components/Home/Cover/Cover";
import Website from "../components/Home/Website/Website";
import Stack from "../components/Home/Stack/Stack";
import Contact from "../components/Home/Contact/Contact";
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
