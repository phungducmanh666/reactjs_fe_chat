import React, { useContext } from "react";
import styles from "./style.module.scss";
import { ThemeContext } from "~/contexts/ThemeContext";

export default function Typography({ component: Component = "h1", children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <Component className={`${styles["typography"]} ${styles[theme]}`}>
      {children}
    </Component>
  );
}
