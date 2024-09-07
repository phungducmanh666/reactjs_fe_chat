import React from "react";
import styles from "./style.module.scss";

export default function Popup({ show, component, children }) {
  return (
    <div className={styles["popup"]}>
      {component}
      <div
        className={`${styles["childs"]} ${
          styles[show === true ? "show" : "hide"]
        }`}
      >
        <div className={styles["arrow"]}></div>
        {children}
      </div>
    </div>
  );
}
