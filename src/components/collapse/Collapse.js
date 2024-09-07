import React from "react";
import styles from "./style.module.scss";

export default function Collapse({ component, children, show }) {
  return (
    <div className={styles["collapse"]}>
      {component}
      <div
        className={`${styles["childs"]} ${
          styles[show === true ? "show" : "hide"]
        }`}
      >
        {children}
      </div>
    </div>
  );
}
