import React from "react";
import styles from "./Cover.module.css";
import { Link } from "react-router-dom";

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
          <Link to="/about">
            <button className={styles.button}>About Gilbert</button>
          </Link>
          {/* <button className={styles.button}>Reach Him Out</button> */}
        </div>
      </div>
    </>
  );
}
