import React from "react";
import styles from "./Website.module.css";

export default function Website() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.one}>
          <div className={styles.ferchael}>FERCHAEL</div>
        </div>
        <div className={styles.two}>
          <div className={styles.talikasih}>TALIKASIH</div>
        </div>
        <div className={styles.three}>
          <div className={styles.miniproject}>MINIPROJECT</div>
        </div>
      </div>
    </>
  );
}
