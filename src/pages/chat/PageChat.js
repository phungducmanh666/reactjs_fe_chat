import React, { useState } from "react";
import styles from "./style.module.scss";
import ChatSide from "./childs/side/ChatSide";
import { messagesData } from "~/apis/datas/messagesData";
import MessageContainer from "./childs/messages/MessageContainer";
import useQuery from "~/hooks/useQuery/useQuery";
import { getChatMessages } from "~/apis/chat/ChatApi";

export default function PageChat() {
  const [loading, response, query, query2] = useQuery(null, false);
  const handleGetChat = (chatId) => {
    query2(async () => {
      return await getChatMessages(chatId);
    });
  };

  return (
    <div className={styles["page-wrapper"]}>
      <ChatSide onClick={handleGetChat} />
      <div className={styles["page-content-wrapper"]}>
        {loading ? (
          <strong>loading...</strong>
        ) : (
          <MessageContainer messages={response} />
        )}
      </div>
    </div>
  );
}
