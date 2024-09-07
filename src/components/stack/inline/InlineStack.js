import React from "react";
import styles from "./style.module.scss";

export default function InlineStack({ children }) {
  const childElements = Array.isArray(children) ? (
    children.map((child, index) => (
      <div key={index} className={styles["stack-item"]}>
        {child}
      </div>
    ))
  ) : (
    <div className={styles["stack-item"]}>{children}</div>
  );

  return <div className={styles["stack-wrapper"]}>{childElements}</div>;
}
