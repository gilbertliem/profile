import React from "react";
import styles from "./Stack.module.css";
import html from "../../../Assets/Icons/html.png";
import css from "../../../Assets/Icons/css.png";
import js from "../../../Assets/Icons/js.png";
import react from "../../../Assets/Icons/react.png";
import redux from "../../../Assets/Icons/redux.png";
import npm from "../../../Assets/Icons/npm.png";
import heroku from "../../../Assets/Icons/heroku.png";
import git from "../../../Assets/Icons/git.png";
import postman from "../../../Assets/Icons/postman.png";

export default function Stack() {
  return (
    <>
      <div className={styles.stack}>
        <div className={styles.overlay}>
          <div className={styles.tech}>technology stack</div>
          <div className={styles.grid}>
            <img src={html} alt="HTML" />
            <img src={css} alt="CSS" />
            <img src={js} alt="JAVASCRIPT" />
            <img src={react} alt="REACT JS" />
            <img src={redux} alt="REDUX" />
            <img src={npm} alt="NODE PACKAGES MODULE" />
            <img src={heroku} alt="HEROKU" />
            <img src={git} alt="GIT" />
            <img src={postman} alt="POSTMAN" />
          </div>
        </div>
      </div>
    </>
  );
}
