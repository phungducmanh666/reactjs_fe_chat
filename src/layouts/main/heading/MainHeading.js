import React from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

export default function MainHeading() {
  return (
    <div className={styles["main-heading"]}>
      <div className={styles["heading-item"]}>
        <Link to={"/"}>Trang chủ</Link>
      </div>
      <div className={styles["heading-item"]}>
        <Link to={"/friend"}>Bạn bè</Link>
      </div>
      <div className={styles["heading-item"]}>
        <Link to={"/chat"}>Trò chuyện</Link>
      </div>
    </div>
  );
}
