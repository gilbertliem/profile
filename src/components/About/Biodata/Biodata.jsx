import React from "react";
import styles from "./Biodata.module.css";

export default function Biodata() {
  return (
    <>
      <aside>
        <div className={styles.container}>
          <div className={styles.subhead}>contact</div>
          <div className={styles.contact}>phone: </div>
          <div className={styles.detail}>+ 62 817 378 555</div>
          <div className={styles.contact}>email: </div>
          <div className={styles.detail}>yohanesbert97@gmail.com</div>
          <div className={styles.contact}>skype: </div>
          <div className={styles.detail}>gilbertliem</div>
          <div className={styles.contact}>linkedin: </div>
          <div className={styles.detail}>
            https://www.linkedin.com/in/gilbert-yohanes-052090119/
          </div>
          <div className={styles.contact}>github: </div>
          <div className={styles.detail}>https://github.com/gilbertliem</div>
        </div>
        <div className={styles.container}>
          <div className={styles.subhead}>education</div>
          <div className={styles.name}>Glints Academy</div>
          <div className={styles.education}>
            Software Engineer
            <br />
            August 2020 - November 2020
          </div>
          <div className={styles.name}>Universitas Ciputra Surabaya</div>
          <div className={styles.education}>
            Bachelor's Degree in Hotel and Tourism Business
            <br />
            July 2015 - July 2019
            <br />
            GPA 3.55 / 4.0
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.subhead}>expertise</div>
          <ul>
            <li className={styles.list}>Javascript</li>
            <li className={styles.list}>HTML</li>
            <li className={styles.list}>CSS</li>
            <li className={styles.list}>GIT, Heroku</li>
            <li className={styles.list}>React JS</li>
            <li className={styles.list}>Redux</li>
            <li className={styles.list}>NPM</li>
            <li className={styles.list}>API</li>
            <li className={styles.list}>Microsoft Office</li>
            <li className={styles.list}>Adobe</li>
            <li className={styles.list}>Sales & Marketing</li>
          </ul>
        </div>
      </aside>
    </>
  );
}
