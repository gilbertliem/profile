import React from "react";
import styles from "./Contact.module.css";
import instagram from "../Assets/Icons/instagram.png";
import linkedin from "../Assets/Icons/linkedin.png";
import facebook from "../Assets/Icons/facebook.png";
import call from "../Assets/Icons/call.png";
import email from "../Assets/Icons/email.png";

export default function Contact() {
  return (
    <>
      <div className={styles.contact}>
        <div className={styles.row}>
          <div className={styles.left}>
            <div className={styles.reach}>STAY CONNECTED</div>
            <div className={styles.icon}>
              <a
                href="https://www.instagram.com/gilbertliem/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="Instagram" />
              </a>
              <a
                href="https://www.linkedin.com/in/gilbert-yohanes-052090119/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a
                href="https://www.facebook.com/gilbert.yohanes.9/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="Facebook" />
              </a>
            </div>
          </div>
          <div className={styles.right}>
            <form action="" className={styles.form}>
              <div className={styles.reach}>CONTACT HIM</div>
              {/* <input type="text" value="" /> */}
              <div className={styles.line}>
                <img src={call} alt="" />
                <input type="text" value="+62 817 378 555" disabled="true" />
              </div>
              <div className={styles.line}>
                <img src={email} alt="" />
                <input
                  type="text"
                  value="yohanesbert97@gmail.com"
                  disabled="true"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
