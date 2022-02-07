import '../style/Navbar.css'
import {AiOutlineDown} from "react-icons/ai"
import logo from '../assets/image/logo.png'
import { Link } from 'react-router-dom';
import hoamai from '../assets/image/hoamai.png'
import hoamai2 from '../assets/image/hoamai2.png'

import { Icon,Button,Flex,Box,Text,Image } from '@chakra-ui/react';

function Navbar() {
    return (
        <div id="nav">
           
        <Link   to='/home' className="logo">
        <Box  d='flex' justifyContent='center'>
          <Box>
          
          <Image src={hoamai} maxHeight='500' mr='230'  maxWidth='150' />
          
          </Box >
         <Box width='190' height='100' d='flex' justifyContent='center' >
          <Image src={logo} mr='200' pt='10'  ></Image>

         </Box>
          
         
          </Box>
        
          
        </Link>
        <Link to='/home' className="home">Home</Link>
        <div className="specialist">Specialist <i><AiOutlineDown /></i> 
          
        </div> 
        <div className="doctor">Doctor <i><AiOutlineDown /></i>
      
        </div>
        <div className="about">About <i><AiOutlineDown /></i>
        
        </div>

        <Box  d='flex' justifyContent='center'>
         
         <Box width='190' height='100' d='flex' mt='10'>
         <Link to='/login'><button className="btn-login"  >LOGIN</button></Link>
         <Link to='/signup'><button className="btn-login"  >SIGNUP</button></Link>

         </Box>
         <Box>
          
          <Image src={hoamai2} maxHeight='500'   maxWidth='150' mr='90'/>
          
          </Box >
         
          </Box>
       
        
      </div>
    )
}

export default Navbar;