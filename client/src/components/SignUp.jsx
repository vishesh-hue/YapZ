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

function SignUp() {
    const [userData , setUserData] = useState({'username':'' , 'email':'' , 'password':''})

    const handleStrChange = (e) =>{
        setUserData({...userData , [e.target.name] : e.target.value} )
    }
    const putData = async () => {
        try {
          const response = await axios.post('http://localhost:5000/api/users/signup', {
            username: userData.username,
            email: userData.email,
            password: userData.password
          });
          console.log( response );
    
        } catch (error) {
          console.error( error);
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
            REGISTER !
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
            name="email"
            placeholder="Email"
            onChange={handleStrChange}
            mt={8}
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
            onClick={putData}
            colorScheme=""
            variant="solid"
            mt={6}
            
      _hover={{ bg: 'teal' }}
            bg="rgb(31, 31, 122)"
          >
            SignUp
          </Button>
          <Text fontSize="sm" color="gray.50" mt={4}>Already Registered? {""}
              <ChakraLink as={Link} to="/signin" color="teal.500" >
          Login
        </ChakraLink>
      </Text>
        </Box>
      </Flex>



    </>
  )
}

export default SignUp
