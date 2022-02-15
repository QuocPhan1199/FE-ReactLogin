import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
 
} from '@chakra-ui/react';
import {} from 'react-router-dom';
import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {handleLoginAPI} from '../services/User'
export default function SimpleCard() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [messagea, setMessage] = useState('')
  const [eye, setEye] = useState(false)
  const navigate = useNavigate()
  const handleUserNameInput = e => {
    setUsername(e.target.value);
  }
  const handlePasswordInput = e => {
    setPassword(e.target.value);
  }
  const handleLogin = async () =>{
    try {
      const data = await handleLoginAPI(username, password)
      if(data)
      {
        localStorage.setItem('token',data.data.data.tokens[0].token)
        localStorage.setItem('user',data.data.data._id)
        
      }
      var loggedInUser = localStorage.getItem('token');
      console.log(loggedInUser)
      
      if(loggedInUser !== null)
      {
        navigate('/pro5')
      }
      
    } catch (error) {
      
      if(error){
        if(error.response){
          if(error.response.data)
          {
            setMessage(error.response.data.message)
          }
        }
      }
    }
  }
  const handleShowHidePassword = () =>{
    setEye(!eye)
  }
  return (<div >
    <div />
    <Flex
      minH={'120vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} ml='200' mb='20'>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} color='blue.400'>Welcome to Doctor Care</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool 
            <Link href='/signup' color={'blue.400'}>
            Sign Up
            </Link>
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={username} placeholder='Enter your email' onChange={handleUserNameInput}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type={eye ? 'text' :'password'} value={password} placeholder='Enter your password' onChange={handlePasswordInput} />
              <span onClick={handleShowHidePassword}><i class={eye ?"far fa-eye eye":"far fa-eye-slash eye"}></i></span>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button onClick={handleLogin}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Sign in
              </Button>
              <Text color='red'
                
              >
               {messagea}
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  </div>
  );
}