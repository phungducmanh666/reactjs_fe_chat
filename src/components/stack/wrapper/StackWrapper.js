import React from "react";
import styles from "./style.module.scss";

export default function StackWrapper({ children }) {
  return <div className={styles["stack-wrapper"]}>{children}</div>;
}
