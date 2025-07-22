import { images , chevron} from "../data";
import { useState, useEffect } from "react";
import CatogeriesSection from "./CatogeriesSection";
import BestSellersSection from "./BestSellersSection";
const MainSection = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNextImg = ()=> {
    setCurrentIndex((prev) => prev === images.length - 1 ? 0 : prev + 1)
  }
  const handlePreviousImg = ()=> {
    setCurrentIndex((prev) => prev === 0 ? images.length - 1 : prev -1)
  }
   useEffect( () => {
      const fetchProducts = async () => {
        const data = await fetch('https://dummyjson.com/products/category/smartphones');
       const json = await data.json();
      }  
      fetchProducts();
     }, [])
  return (
    <div>
    <div  className="relative h-screen w-screen">
     <div className="relative w-full">
    <div
    className="relative w-full h-screen bg-cover bg-no-repeat bg-center"
    style={{ backgroundImage: `url(${images[currentIndex]})` }}>
    {/* Gradient Overlay */}
    <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-white to-transparent" />
    <img
      onClick={handlePreviousImg}
      src={chevron[0]}
      className="w-20 2xl:w-32 absolute left-5 top-1/4 hover:cursor-pointer"
    />
    <img
      onClick={handleNextImg}
      src={chevron[1]}
      className="w-20 2xl:w-32 absolute right-5 top-1/4 cursor-pointer"
    />
   </div>
   </div>
     
    </div>
     <div className="px-3 lg:px-10 space-y-8 ">
      <CatogeriesSection/>
      <BestSellersSection/>
     </div>
   

    </div>
  );
};

export default MainSection;
