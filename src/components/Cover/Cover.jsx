import React from "react";
import background from "../Assets/Images/background.jpeg";
import styles from "./Cover.module.css";

export default function Cover() {
  return (
    <>
      <div className={styles.cover}>
        <div className={styles.headline}>
          <div className={styles.welcome}>Welcome!</div>
          <div className={styles.explore}>
            This is Gilbert Yohanes portfolio website.
            <br />
            Explore this website to know more about his works.
          </div>
          <button className={styles.button}>About Gilbert</button>
          <button className={styles.button}>Reach Him Out</button>
        </div>
      </div>
    </>
  );
}
