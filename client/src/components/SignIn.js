import axios from 'axios'
import React, { useState } from 'react'
import {
  Box,
  Flex,
  Heading,
  Input,
  Button,

} from "@chakra-ui/react";
import {  Text, Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


function SignIn() {
    const [userData , setUserData] = useState({'username':'' , 'password':''})

    const handleStrChange = (e) =>{
        setUserData({...userData , [e.target.name] : e.target.value} )
    }
    const checkLogin = async () => {
        console.log(userData)  
      try {
          const response = await axios.post('http://localhost:5000/api/users/signin', userData );
          console.log( response );
    
        } catch (error) {
          console.log( "error is: " + error);
        }
      }
  return (
    <>

        <Flex
        align="center"
        justify="center"
        minH="100vh"
        bg="gray.100" // Background color
      >
        <Box
          p={8}
          maxWidth="400px"
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
          bg="#7421de"
        >

        
          <Heading as="h3" size="lg" textAlign="center" color="gray.100" mt={5}>
            LOGIN !
          </Heading>

          <Input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleStrChange}
            mt={10} // Margin top
            bg="gray.100"
          />
          <Input
            type="text"
            name="password"
            placeholder="Password"
            onChange={handleStrChange}
            mt={8}
            bg="gray.100"
          />
  
          <Button
            onClick={checkLogin}
            variant="solid"
            mt={6}
            
      _hover={{ bg: 'teal' }}
            bg="rgb(31, 31, 122)"
          >
          <Text color="gray.100">
            LogIn
          </Text>

          
          </Button>
        </Box>
      </Flex>



































    </>
  )
}

export default SignIn

// {
//     "username" : "05-yuvraj-singh",
//     "password" : "12312345"
// }