import Banner from "./Banner"
import Speciality from "./Speciality";
import Doctor from "./Doctors";
import Handbook from "./Handbook";

function Home(){
    return(
        <>
            <Banner />
            <Speciality />
            <Handbook />
            <Doctor />
        </>
    )
}

export default Home;