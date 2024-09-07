import React from "react";
import styles from "./style.module.scss";

export default function Avatar({ url, ...props }) {
  return (
    <img
      {...props}
      className={styles["avatar"]}
      src={
        url
          ? url
          : "https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-avatar-hoat-hinh-de-thuong-xinh-xan.jpg?1704788263223"
      }
    />
  );
}
