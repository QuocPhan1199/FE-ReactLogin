import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Image,
  ChakraProvider
} from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import Signup from './Signup';





function btnlogin() {

}
export default function SimpleCard() {
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
           
            to enjoy all of our cool <Link to='/signup' color={'blue.400'}>signup</Link> ✌️
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
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={btnlogin}

              >
                Sign in
              </Button>
              <Text color='blue.400'

                _hover={{
                  color: 'black'
                }}
              >

              </Text>
            </Stack>
          </Stack>

        </Box>

      </Stack>

    </Flex>

  </div>
  );
}