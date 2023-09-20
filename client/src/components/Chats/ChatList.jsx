import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Flex, Heading, UnorderedList, ListItem, Text, Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ChatList = () => {
  const [chatsData, setChatsData] = useState([]);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/chats/chat");
        setChatsData(data.chats);
      } catch (error) {
        console.error('Error fetching chat data:', error);
      }
    };

    fetchChats();
  }, []);

  return (
    <Flex align="center" justify="center" minH="100vh" bg="gray.100">
      <Box
        p={8}
        maxHeight="500px" // Adjust the maximum height as needed
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
        bg="#7421de"
        marginLeft={5}
        overflowY="auto" // Enable vertical scrolling when content exceeds maxHeight
      >
        <Heading as="h3" size="lg" textAlign="center" color="gray.100" mt={5} mb={9}>
          Your Chats
        </Heading>
        <UnorderedList listStyleType="none" p={0}>
          {chatsData.map((chat) => (
            <ListItem key={chat._id} paddingBottom={4} marginBottom={4}>
              <Link as="h2" fontSize="lg" mb={2}>
                <Text fontSize="sm" color="gray.100" mt={4}>
                  {chat.chatName}
                </Text>
              </Link>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </Flex>
  );
};

export default ChatList;
