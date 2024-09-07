import React, { useState } from "react";
import styles from "./style.module.scss";
import Side from "./childs/side/Side";
import MyFriend from "./childs/myFriend/MyFriend";
import SearchFriend from "./childs/searchFriend/SearchFriend";

export default function PageFriend() {
  const [currentContent, setCurrentContent] = useState(null);

  const handleMenuClick = (value) => {
    switch (value) {
      case "my-friend":
        setCurrentContent(<MyFriend />);
        break;
      case "search-friend":
        setCurrentContent(<SearchFriend />);
        break;
      default:
        break;
    }
  };

  const menuObjs = [
    { content: "Tìm kiếm bạn bè", value: "search-friend" },
    { content: "Bạn bè của tôi", value: "my-friend" },
  ];

  return (
    <div className={styles["page"]}>
      <div className={styles["side"]}>
        <Side menuObjs={menuObjs} onClick={handleMenuClick} />
      </div>
      <div className={styles["content"]}>{currentContent}</div>
    </div>
  );
}
