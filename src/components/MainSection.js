import { images , chevron} from "../data";
import { useState } from "react";
import CatogeriesSection from "./CatogeriesSection";
const MainSection = () => {

  const [currentIndex, setCurrentIndex] = useState(0)


  const handleNextImg = ()=> {
    setCurrentIndex((prev) => prev === images.length - 1 ? 0 : prev + 1)

  }
  const handlePreviousImg = ()=> {
    setCurrentIndex((prev) => prev === 0 ? images.length - 1 : prev -1)

  }
  return (
    <div className="relative h-screen w-screen">
        <div className="relative h-full w-full bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${images[currentIndex]})` }} >
          {/* Gradient Overlay */}
          <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-white to-transparent" />
          <img onClick={() => {
            handlePreviousImg();
          }}
           src={chevron[0]}
           className="w-20 absolute left-5 top-30 hover:cursor-pointer"/>
          <img onClick={()=>{
            handleNextImg();
          }} src={chevron[1]}
           className="w-20 absolute right-5 top-30 cursor-pointer "/>

            <div className="absolute mt-64">
           <CatogeriesSection/>
           </div>
        </div>
      
     
     
    </div>
  );
};

export default MainSection;
