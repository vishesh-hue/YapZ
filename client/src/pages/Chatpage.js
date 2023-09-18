import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Chatpage = () => {
  const [chatsData, setChatsData] = useState([]);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/chat");
        setChatsData(data.chats); // Access the 'chats' property and set it in the state
      } catch (error) {
        console.error('Error fetching chat data:', error);
      }
    };

    fetchChats();
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
      <div>
        <h1>Chat List</h1>
        <ul>
          {chatsData.map((chat) => (
            <li key={chat._id}>
              <h2>{chat.chatName}</h2>
              <p>Group Chat: {chat.isGroupChat ? 'Yes' : 'No'}</p>
              {chat.isGroupChat && (
                <p>Group Admin: {chat.groupAdmin.name}</p>
              )}
              <ul>
                {chat.users.map((user) => (
                  <li key={user.email}>
                    <strong>Name:</strong> {user.name}, <strong>Email:</strong>{' '}
                    {user.email}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Chatpage;
