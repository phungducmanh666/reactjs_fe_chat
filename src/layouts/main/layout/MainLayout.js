import React from "react";
import styles from "./style.module.scss";
import { Outlet } from "react-router-dom";
import MainHeading from "../heading/MainHeading";

export default function MainLayout() {
  return (
    <div className={styles["main-layout"]}>
      <MainHeading />
      <Outlet />
    </div>
  );
}
