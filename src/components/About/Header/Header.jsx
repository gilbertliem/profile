import React from "react";
import styles from "./Header.module.css";
import profile from "../../Assets/Images/profile.jpg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className={styles.row}>
        <div className={styles.home}>
          <Link to="/" className={styles.link}>
            <div>{"<"}home</div>
          </Link>
        </div>
        <img src={profile} alt="Profile" className={styles.profile} />
        <div className={styles.col}>
          <div className={styles.name}>gilbert yohanes</div>
          <div className={styles.summary}>
            Gilbert is a graduate software engineer student. He took Frontend
            Developer as the main subject, and focus on designing website,
            creating friendly user interface, and working with APIs. Before he
            takes software engineer academy program, he worked as a sales
            executive in a company in Jakarta. He decided to change his career
            path because he found himself enjoy and curious at the same time
            about programming (coding), and he wants to focus on software
            engineer as his career. He has made some projects for your
            references (information in Portfolio area), kindly explore this
            website and check his works out!
          </div>
        </div>
      </div>
    </>
  );
}
