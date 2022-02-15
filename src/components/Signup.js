import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import {handleSignUpAPI} from '../services/User'
  import {useNavigate} from 'react-router-dom'

  export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('customer');
    const [password_1, setPassword_1] = useState('');
    const [messagea, setMessage] = useState('')
    const navigate = useNavigate()
    const handleUserNameInput = e => {
        setUsername(e.target.value);
        console.log(e.target.value)
      }
      const handlePasswordInput = e => {
        setPassword(e.target.value);
        console.log(e.target.value)
      }
      const handlePassword_1_Input = e => {
        setPassword_1(e.target.value);
        console.log(e.target.value)
      }

      const handleSignUp = async () =>{
        console.log(username)
        console.log(password)
        try {
          const data = await handleSignUpAPI(username, password, password_1, role)
          if(data)
          {
            localStorage.setItem('token',data.data.data.tokens[0].token)
          }
          var loggedInUser = localStorage.getItem('token')
          if(loggedInUser !== null)
          {
            navigate('/login')
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
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={username} onChange={handleUserNameInput}/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} value={password} onChange={handlePasswordInput}/>
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>

                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} value={password_1} onChange={handlePassword_1_Input}/>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button onClick={handleSignUp}
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
               <Text color='red'
                
              >
               {messagea}
              </Text>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link to="/login" color={'blue.400'} ><Button>Login</Button></Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }