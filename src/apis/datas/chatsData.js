const chatsData = [
  {
    id: 1,
    avatarUrl:
      "https://img.freepik.com/premium-vector/man-with-purple-shirt-blue-shirt-with-purple-collar_969863-208745.jpg",
    fullName: "Nhóm chát 1",
  },
  {
    id: 2,
    avatarUrl:
      "https://static.vecteezy.com/system/resources/previews/001/993/889/non_2x/beautiful-latin-woman-avatar-character-icon-free-vector.jpg",
    fullName: "Phùng Thị Con Gái",
  },
];

const chatMessagesData = {
  2: [
    {
      from: "Phùng Thị Con Gái",
      content: "Hello! nice to meet you",
      time: "18/11/2002 06:00:000",
      isMine: false,
    },
    {
      from: "Phùng Đức Mạnh",
      content: "Hello! nice to meet you too",
      time: "18/11/2002 06:01:000",
      isMine: true,
    },
    {
      from: "Phùng Thị Con Gái",
      content: "Where are you from",
      time: "18/11/2002 06:02:000",
      isMine: false,
    },
    {
      from: "Phùng Đức Mạnh",
      content: "Im from vietnam, And you?",
      time: "18/11/2002 06:04:000",
      isMine: true,
    },
    {
      from: "Phùng Thị Con Gái",
      content:
        "Im from china, well we so close.Im from china, well we so close.Im from china, well we so close.Im from china, well we so close.Im from china, well we so close.Im from china, well we so close.Im from china, well we so close.Im from china, well we so close.Im from china, well we so close.Im from china, well we so close.Im from china, well we so close.Im from china, well we so close.Im from china, well we so close.Im from china, well we so close.Im from china, well we so close.",
      time: "18/11/2002 06:05:000",
      isMine: false,
    },
  ],
};

export { chatsData, chatMessagesData };
