import React from "react";
import styles from "./Biodata.module.css";
import call from "../../../Assets/Icons/call.png";
import email from "../../../Assets/Icons/email.png";
import skype from "../../../Assets/Icons/skype.svg";
import linkedin from "../../../Assets/Icons/linkedin.png";
import github from "../../../Assets/Icons/github.png";

export default function Biodata() {
  return (
    <>
      <aside>
        <div className={styles.container}>
          <div className={styles.subhead}>contact</div>
          <div className={styles.row}>
            <img src={call} alt="phone" className={styles.contact} />
            <div className={styles.detail}>+ 62 817 378 555</div>
          </div>
          <div className={styles.row}>
            <img src={email} alt="email" className={styles.contact} />
            <div className={styles.email}>yohanesbert97@gmail.com</div>
          </div>
          <div className={styles.row}>
            <img src={skype} alt="skype" className={styles.contact} />
            <div className={styles.detail}>gilbertliem</div>
          </div>
          <div className={styles.row}>
            <img src={linkedin} alt="linkedin" className={styles.contact} />
            <a
              href="https://www.linkedin.com/in/gilbert-yohanes-052090119/"
              className={styles.linkedin}
            >
              https://www.linkedin.com/in/gilbert-yohanes-052090119/
            </a>
          </div>
          <div className={styles.row}>
            <img src={github} alt="github" className={styles.contact} />
            <a href="https://github.com/gilbertliem" className={styles.github}>
              https://github.com/gilbertliem
            </a>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.container}>
          <div className={styles.subhead}>education</div>
          <div className={styles.col}>
            <div className={styles.name}>Glints Academy</div>
            <div className={styles.education}>
              Software Engineer
              <br />
              August 2020 - November 2020
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.name}>Universitas Ciputra Surabaya</div>
            <div className={styles.education}>
              Bachelor's Degree in Hotel and Tourism Business
              <br />
              July 2015 - July 2019
              <br />
              GPA 3.55 / 4.0
            </div>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.container}>
          <div className={styles.subhead}>expertise</div>
          <ul className={styles.list}>
            <li>Javascript</li>
            <li>HTML</li>
            <li>SCSS</li>
            <li>GIT, Heroku</li>
            <li>React JS</li>
            <li>Redux</li>
            <li>NPM</li>
            <li>API</li>
            <li>Microsoft Office</li>
            <li>Adobe</li>
            <li>Sales & Marketing</li>
          </ul>
        </div>
        <div className={styles.line}></div>
        <div className={styles.container}>
          <div className={styles.subhead}>language</div>
          <div className={styles.language}>
            <div>
              <strong>english</strong> - intermediate
            </div>
            <div>
              <strong>bahasa indonesia</strong> - native
            </div>
            <div>
              <strong>mandarin</strong> - beginner
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
