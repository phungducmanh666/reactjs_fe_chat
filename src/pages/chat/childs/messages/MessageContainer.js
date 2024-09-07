import React from "react";
import styles from "./style.module.scss";

export default function MessageContainer({ messages }) {
  return (
    <div className={styles["message-container"]}>
      {messages &&
        messages.map((message, index) => {
          if (message["isMine"] === true) {
            return (
              <div className={styles["message"]}>
                <div
                  className={`${styles["message-wrapper"]} ${styles["right"]}`}
                >
                  <div className={styles["message-from"]}>{message.from}</div>
                  <div className={styles["message-content"]}>
                    {message.content}
                  </div>
                  <div className={styles["message-time"]}>{message.time}</div>
                </div>
              </div>
            );
          } else {
            return (
              <div className={styles["message"]}>
                <div
                  className={`${styles["message-wrapper"]} ${styles["left"]}`}
                >
                  <div className={styles["message-from"]}>{message.from}</div>
                  <div className={styles["message-content"]}>
                    {message.content}
                  </div>
                  <div className={styles["message-time"]}>{message.time}</div>
                </div>
              </div>
            );
          }
        })}
    </div>
  );
}
