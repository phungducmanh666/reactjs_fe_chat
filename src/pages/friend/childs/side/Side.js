import React from "react";
import styles from "./style.module.scss";

export default function Side({ menuObjs, onClick }) {
  return (
    <div className={styles["wrapper"]}>
      <ul className={styles["menu-item-list"]}>
        {menuObjs.map((menuObj) => (
          <li
            className={styles["menu-item"]}
            key={menuObj["value"]}
            onClick={(_) => {
              onClick(menuObj["value"]);
            }}
          >
            {menuObj["content"]}
          </li>
        ))}
      </ul>
    </div>
  );
}
