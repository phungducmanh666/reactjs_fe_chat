import React from "react";
import styles from "./style.module.scss";

export default function TextInput({ label, ...props }) {
  return (
    <div className={styles["input-wrapper"]}>
      <div className={styles["input-label"]}>{label}</div>
      <input {...props} className={styles["input"]} />
    </div>
  );
}
