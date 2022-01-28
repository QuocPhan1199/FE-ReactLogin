import '../style/Navbar.css'
import {AiOutlineDown} from "react-icons/ai"
import logo from '../assets/image/logo.png'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div id="nav">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="home">Home</div>
        <div className="specialist">Specialist <i><AiOutlineDown /></i> 
          
        </div> 
        <div className="doctor">Doctor <i><AiOutlineDown /></i>
        
        </div>
        <div className="about">About <i><AiOutlineDown /></i>
        
        </div>
        <Link to='/login'><button className="btn-login"  >LOGIN/SIGUP </button></Link>
      </div>
    )
}

export default Navbar;