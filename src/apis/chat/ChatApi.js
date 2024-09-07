import { messagesData } from "../datas/messagesData";

const { chatsData, chatMessagesData } = require("../datas/chatsData");

const getChats = async () => {
  return await new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove(chatsData);
    }, 1000);
  });
};

const getChatMessages = async (id) => {
  return await new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove(chatMessagesData[id]);
    }, 1000);
  });
};

export { getChats, getChatMessages };
