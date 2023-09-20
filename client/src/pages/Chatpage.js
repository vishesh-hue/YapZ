import React from 'react'
import ChatList from '../components/Chats/ChatList'
import Messages from '../components/Chats/Messages'
import { Box,Flex } from '@chakra-ui/react';
function Chatpage() {
  return (
    <>
<Flex>
      <Box w="30%" h="80%">
        <ChatList />
      </Box>
      <Box w="70%" h="80%">
        <Messages />
      </Box>
    </Flex>



    </>
  )
}

export default Chatpage
