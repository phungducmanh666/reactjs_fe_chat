import React, { useState } from "react";
import styles from "./style.module.scss";
import { friendsData } from "../searchFriend/data";
import InlineStack from "~/components/stack/inline/InlineStack";
import FriendCard from "~/components/card/friend/FriendCard";
import Button from "~/components/button/Button";

export default function MyFriend() {
  const [friendList, setFriendList] = useState(friendsData);

  return (
    <div className={styles["content-wrapper"]}>
      <div className={styles["heading"]}>
        <h1>Bạn bè</h1>
      </div>
      <div className={styles["body"]}>
        <InlineStack>
          {friendList.map((data, index) => (
            <FriendCard
              key={index}
              {...data}
              actions={<Button content={"Hủy kết bạn"} type={"danger"} />}
            />
          ))}
        </InlineStack>
      </div>
    </div>
  );
}
