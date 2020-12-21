import React from "react";
import Header from "../../components/About/Header/Header";
import Biodata from "../../components/About/Biodata/Biodata";
import Experiences from "../../components/About/Experiences/Experiences";
import styles from "./About.module.css";

export default function About() {
  return (
    <>
      <Header />
      <div className={styles.grid}>
        <Biodata />
        <Experiences />
      </div>
    </>
  );
}
