import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.copyright}>
          Copyright © 2020. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}
