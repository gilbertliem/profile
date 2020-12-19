import React from "react";
import styles from "./Header.module.css";
import profile from "../Assets/Images/profile.jpg";

export default function Header() {
  return (
    <>
      <div className={styles.row}>
        <img src={profile} alt="Profile Picture" className={styles.photo} />
        <div className={styles.col}>
          <div className={styles.name}>gilbert yohanes</div>
          <div className={styles.summary}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            fugiat ipsum! Sit, inventore ab rem sunt quo sed numquam totam.
          </div>
        </div>
      </div>
    </>
  );
}
