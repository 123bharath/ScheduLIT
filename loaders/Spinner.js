import React from "react";
import styles from "./Spinner.module.css";

export default function Spinner({ message }) {
  return (
    <div className={styles.container}>
      <div className={styles.message}>{message ? message : "Loading..."}</div>
      <span className={styles.loader}></span>
    </div>
  );
}
