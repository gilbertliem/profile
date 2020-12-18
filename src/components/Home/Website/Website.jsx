import React from "react";
import styles from "./Website.module.css";

export default function Website() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.one}>
          <div className={styles.overlay}>
            <a
              href="https://ferchael.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ferchael}
            >
              FERCHAEL
            </a>
          </div>
        </div>
        <div className={styles.two}>
          <div className={styles.overlay}>
            <a
              href="https://production-react-talikasih.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.talikasih}
            >
              TALIKASIH
            </a>
          </div>
        </div>
        <div className={styles.three}>
          <div className={styles.overlay}>
            <a
              href="https://production-teamg.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.miniproject}
            >
              MINIPROJECT
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
