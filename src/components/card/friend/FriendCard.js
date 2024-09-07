import React from "react";
import styles from "./style.module.scss";

import Avatar from "~/components/avatar/Avatar";

export default function FriendCard({ avatarUrl, fullName, actions, onClick }) {
  return (
    <div className={styles["card-wrapper"]}>
      <div>
        <Avatar url={avatarUrl} />
        <div className={styles["card-name"]} onClick={onClick}>
          {fullName}
        </div>
      </div>
      {actions}
    </div>
  );
}
