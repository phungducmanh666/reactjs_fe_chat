import React, { useState } from "react";
import styles from "./style.module.scss";

import TextInput from "~/components/input/text/TextInput";
import InlineStack from "~/components/stack/inline/InlineStack";
import FriendCard from "~/components/card/friend/FriendCard";
import Button from "~/components/button/Button";
import useDelay from "~/hooks/useDelay/useDelay";
import { friendsData } from "./data";

export default function SearchFriend() {
  const [friendList, setFriendList] = useState(friendsData);

  const [value, setValue] = useDelay("", 500, (value) => {
    let _friendList = [];

    value = value.toLowerCase();

    if (value === "") {
      _friendList = friendsData;
    } else {
      friendsData.map((e) => {
        if (e.fullName.toLocaleLowerCase().includes(value)) {
          _friendList.push(e);
        }
      });
    }

    setFriendList(_friendList);
  });

  return (
    <div className={styles["content-wrapper"]}>
      <div className={styles["heading"]}>
        <h1>Tìm bạn bè</h1>
      </div>
      <div className={styles["body"]}>
        <div className={styles["search"]}>
          <TextInput
            label="Tìm kiếm bạn bè"
            placeholder="Nhập tên cần tìm"
            value={value}
            onChange={(e) => {
              const _value = e.target.value;
              setValue(_value);
            }}
          />
        </div>
        <InlineStack>
          {friendList.map((data, index) => (
            <FriendCard
              key={index}
              {...data}
              actions={<Button content={"Thêm bạn bè"} />}
            />
          ))}
        </InlineStack>
      </div>
    </div>
  );
}
