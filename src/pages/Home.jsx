import React from "react";
import Cover from "../components/Home/Cover/Cover";
import Website from "../components/Home/Website/Website";
import Stack from "../components/Home/Stack/Stack";
import Contact from "../components/Home/Contact/Contact";
import Footer from "../components/Footer/Footer";

export default function Home() {
  // const [displayDownButton, setDisplayDownButton] = useState(false);
  // const [displayUpButton, setDisplayUpButton] = useState(false);
  // const [scrollPosition, setScrollPosition] = useState(0);

  // checkScroll=()=>{
  //   if(scrollPosition>stateref)
  // }

  return (
    <>
      <Cover />
      <Website />
      <Stack />
      <Contact />
      <Footer />
      {/* {displayUpButton ? <button>Back to top</button> : null} */}
    </>
  );
}
