import React, { useState } from "react";
import styles from "./style.module.scss";

import { chatsData } from "../../data";
import FriendCard from "~/components/card/friend/FriendCard";
import useQuery from "~/hooks/useQuery/useQuery";
import { getChats } from "~/apis/chat/ChatApi";

export default function ChatSide({ onClick }) {
  const [loading, response, query] = useQuery(getChats, true);

  const [chats, setChats] = useState(chatsData);

  if (loading === true) {
    return <div className={styles["side-wrapper"]}>loading...</div>;
  }

  return (
    <div className={styles["side-wrapper"]}>
      {response &&
        response.map((data, index) => {
          return (
            <>
              <FriendCard
                key={index}
                {...data}
                onClick={() => {
                  onClick(data.id);
                }}
              />
              <hr />
            </>
          );
        })}
    </div>
  );
}
