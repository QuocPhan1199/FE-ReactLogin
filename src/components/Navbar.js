import '../style/Navbar.css'
import {AiOutlineDown} from "react-icons/ai"
import logo from '../assets/image/logo.png'
import { Link } from 'react-router-dom'; 
import '../style/Dropdown.css'

import {Box,Image} from '@chakra-ui/react';
// import {handleGetUserId} from '../services/User'
function Navbar() {
  // const id = localStorage.getItem('user');
  // const token = localStorage.getItem('token');
  // const handleGetId = async () =>{
  //   try {
  //   if(token){
  //    const data = await handleGetUserId(id)
  //    console.log(data)
  //   }
  //   } catch (error) {
      
  //   //   if(error){
  //   //     if(error.response){
  //   //       if(error.response.data)
  //   //       {
  //   //         setMessage(error.response.data.message)
  //   //       }
  //   //     }
  //   //   }
  //   }
  //}  
    return (
        <div id="nav">
        <Link to='/home' className="logo">
        <Box  d='flex' justifyContent='center'>
          <Box>
          </Box >
         <Box width='190' height='100' d='flex' justifyContent='center' >
          <Image src={logo} mr='200' pt='10'  ></Image>
         </Box>
          </Box>
        </Link>
        <Link to='/home' className="home">Home</Link>
        <div className="specialist dropdown ">Specialist
         <i><AiOutlineDown /></i> 
        <div class="dropdown-content">
          <a href="#">Neurology</a>
          <a href="#">Orthopedic</a>
          <a href="#">Dentist</a>
      </div>
        </div> 
        <div className="doctor dropdown">Doctor <i><AiOutlineDown /></i>
        <div class="dropdown-content">
          <a href="#">Neurology</a>
          <a href="#">Orthopedic</a>
          <a href="#">Dentist</a>
      </div>
        </div>
        <div className="about">About <i><AiOutlineDown /></i>
        </div>
        <Box  d='flex' justifyContent='center'>
         <Box width='190' height='100' d='flex' mt='10'>
         <Link to ='/login' ><button className="btn-login">LOGIN</button></Link>
         <Link to='/pro5'><button className="btn-login"  onClick={handleGetId}>ProFile</button></Link> 
         </Box>
         <Box>
          </Box >    
          </Box>
      </div>
    )
}

export default Navbar;