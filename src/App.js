import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Homepage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Newyear from './components/Newyear'
import React from "react";
import { Routes ,Route } from "react-router-dom";

import {ChakraProvider} from '@chakra-ui/react'



function App() {
  return (
    <ChakraProvider>
      <Newyear/>
    <Navbar />
    
    <Routes>
        <Route path="/home" element= { <Home /> } />
        <Route path="/login" element={ <Login/> } >
       
       
        </Route>
        <Route path="/signup" element={ <Signup/> } />
      
    </Routes>
    
    <Footer />
    </ChakraProvider>
  )
}

export default App;
