import React, { useEffect, useState } from 'react';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3006/api';

const Chatpage = () => {
  const [chats, setChats] = useState([]);

  const fetchChat = async () => {
    const { data } = await axios.get('/chat');
    setChats(data);
  };

  useEffect(() => {
    fetchChat();
  }, []);

  return (
    <div>
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default Chatpage;
