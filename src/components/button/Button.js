import React, { useContext } from "react";
import { ThemeContext } from "~/contexts/ThemeContext";
import styles from "./style.module.scss";

export default function Button({ type, content, ...props }) {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button
      className={`${styles["btn"]} ${styles[theme]} ${styles[type]}`}
      {...props}
    >
      {content}
    </button>
  );
}
