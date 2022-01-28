import spy from '../assets/image/brain.png'
import { MdArrowBackIos,MdOutlineNavigateNext } from "react-icons/md"
import '../style/Speciality.css'
function Speciality() {
    return(
        <div id="speciatily">
            <div className="container-speciality">
                <p className="title-speciality"> Speciality </p>
                <div className="container-item">
                    <div className="speciatily-item">
                        <img src={spy} alt="" />
                        <p className="title-speciatily">Cardiology</p>
                    </div>

                    <div className="speciatily-item">
                        <img src={spy} alt="" />
                        <p className="title-speciatily">Cardiology</p>
                    </div>

                    <div className="speciatily-item">
                        <img src={spy} alt="" />
                        <p className="title-speciatily">Cardiology</p>
                    </div>
                </div>
                <button className='btn-back'> <MdArrowBackIos/> </button>
                <button className='btn-next'> <MdOutlineNavigateNext /> </button>
            </div>
            
        </div>
    )
}

export default Speciality