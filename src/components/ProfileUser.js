import React from 'react';
import '../style/input-file.css'
import {
    Flex,
    Box,
    Input,
    Text,
    Image,
    Button
  } from '@chakra-ui/react';
  import avt from '../assets/image/Doctor.jpg'
  import {handleCreateUser,handleGetUserId} from '../services/User'
  import  {useState} from 'react'
function ProfileUser() {
    
    const [full_name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone_number, setPhone] = useState('')

    const handleNameInput = e => {
        setName(e.target.value);
      }
    const handleAddressInput = e => {
        setAddress(e.target.value);
      }
    const handlePhoneInput = e => {
        setPhone(e.target.value);
      }
    const account = localStorage.getItem('user');
    var token = localStorage.getItem('token');
    
      const handleCreate = async () =>{
        try {
        if(token){
         await handleCreateUser(full_name,address,phone_number,account)
        }
          
        } catch (error) {
          
        //   if(error){
        //     if(error.response){
        //       if(error.response.data)
        //       {
        //         setMessage(error.response.data.message)
        //       }
        //     }
        //   }
        }
      }  

      
  return <div>
      
    <Flex >
        <Box  w='80%' h='50%' m='10%' boxShadow='2xl' borderRadius='2xl' d='flex' rounded='md' bg='white' boxShadow='outline'
         d='flex' justifyContent='center'
         alignContent='center' >
        <Box  >
            <Image src={avt} w='250' h='250' boxShadow='2xl' m='10' borderRadius='50%' border='1px' borderColor='blue.300'></Image>
            <input  type='file' className='custom-file-input' /> 
        </Box>
       <Box d='flex' justifyContent='center' alignItems='flex-start' w='50%' h='400' flexDirection='column'  flexGrow='2'>
        <Box maxH='300' className='box'>
        <Text maxH='100' >
            Full Name
            <Input type='text'  value={full_name} placeholder='Enter your full name' onChange={handleNameInput} className='text-inf'></Input>
        </Text>
        <Text  maxH='100'>
           Address
            <Input type='text' value={address} placeholder='Enter your address' onChange={handleAddressInput} className='text-inf'></Input>
        </Text>
        <Text maxH='100'>
            Phone
            <Input type='text' value={phone_number} placeholder='Enter your phone' onChange={handlePhoneInput} className='text-inf'></Input>
        </Text>
        <Text >
            Gender
            <Input type='text'  className='text-inf'></Input>
        </Text>
        <Button onClick={handleCreate}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Create
              </Button>
        </Box>
        </Box>
        </Box>
    </Flex>


  </div>;
}

export default ProfileUser;
