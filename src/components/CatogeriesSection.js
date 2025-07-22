
import {IMG_URL , IMG_URL_TWO, IMG_URL_STORE} from "../utils/constants";
import { Link } from "react-router";
const CatogeriesSection = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 2xl:gap-10 -mt-90 2xl:-mt-180 z-40 sticky text-xl 2xl:text-3xl ">

      {/* Gaming */}
      <Link to="/products/category/devices"> 
      <div data-testid="category" className="bg-white p-4 h-80 xl:h-95 2xl:h-140 flex flex-col justify-between">
        <h1 className="font-bold">Get your game on</h1>
        <img alt="" src={IMG_URL_TWO+ "Stores-Gaming/FinalGraphics/Fuji_Gaming_store_Dashboard_card_2x_EN._SY608_CB564799420_.jpg" } />
        <span className="text-xs 2xl:text-lg  text-blue-600">Shop gaming</span>
      </div>
      </Link>
      
      {/* home */}
       <Link to="/products/category/home"> 
       <div data-testid="category" className="bg-white p-4 h-80 xl:h-95 2xl:h-140 flex flex-col justify-between">
        <h1 className="font-bold  mb-2">Shop for your home essentials</h1> 
        <div className="grid grid-cols-2 gap-4 text-xs 2xl:text-lg ">

            <div>
           <img alt="" src={IMG_URL_TWO+"BAU2024Sept/CleaningTool_2x._SY232_CB563137408_.jpg" } />
            <span>Cleaning Tools</span>
          </div>

           <div>
            <img  alt="" src={IMG_URL_TWO+"BAU2024Sept/HomeStorage_2x._SY232_CB563137408_.jpg" } />
            <span>Home Storage</span>
          </div>

           <div>
             <img alt="" src={IMG_URL_TWO+"BAU2024Sept/HomeDecor_2x._SY232_CB563137408_.jpg"} />
            <span>Home Decor</span>
          </div>

           <div>
            <img alt="" src={IMG_URL_TWO+"BAU2024Sept/Bedding_2x._SY232_CB563137408_.jpg" } />
            <span>Bedding</span>
          </div>
        
        </div>
        <span className=" text-xs 2xl:text-lg text-blue-600">Shop gaming</span>
      </div>
      </Link>

       {/* kitchen */}
       <Link to="/products/category/kitchen">
          <div data-testid="category" className="bg-white h-80 xl:h-95 2xl:h-140 px-5 py-3 flex flex-col justify-between">
        <h1 className="font-bold  mb-2">Kitchen appliances</h1>
          <div>
            <img alt="" src={IMG_URL + "313wAT6Iy2L._SY320_.jpg"} />
            <span className="text-xs 2xl:text-lg">Cooker</span>
          </div>
       
        <div className="grid grid-cols-3 gap-2 text-xs 2xl:text-lg">
          <div>
            <img alt="" src={IMG_URL + "21W7-lndINL._SY150_.jpg" }/>
            <span>Coffee</span>
          </div>

           <div>
           <img  alt="" src={IMG_URL + "21B-NkA9p-L._SY150_.jpg" }/>
            <span>Pots and Pans</span>
          </div>

           <div>
            <img alt="" src={IMG_URL + "217GQ1a2QzL._SY150_.jpg"} />
            <span>Kettles</span>
          </div>

        </div>
        <span className=" text-xs 2xl:text-lg text-blue-600">Shop gaming</span>
      </div>
       
       </Link>
    
       {/* fashion */}
       <Link to="/products/category/fashion">
       <div  data-testid="category" className="bg-white px-5 py-3 h-80 xl:h-95 2xl:h-140 flex flex-col justify-between">
        <h1 className="font-bold  mb-2">Fashion trends you like</h1>
        <div className="grid grid-cols-2 gap-2 text-xs 2xl:text-lg"> 
          <div>
             <img className="" alt="" src={IMG_URL_STORE + "_2_x2._SY232_CB595261253_.jpg" }/>
             <span>Dresses</span>
          </div>
          <div>
             <img className="" alt="" src={IMG_URL_STORE + "_3_x2._SY232_CB595261253_.jpg" }/>
              <span>Knits</span>
          </div>
          <div>
            <img className="" alt="" src={IMG_URL_STORE + "_1_x2._SY232_CB595261253_.jpg" }/>
            <span>Jackets</span>
          </div>
          <div>
            <img className="" alt="" src={IMG_URL_STORE + "_4_x2._SY232_CB595261253_.jpg" }/>
            <span>Jewlery</span>
          </div>
         
          </div>
        <span className=" text-xs 2xl:text-lg text-blue-600">Shop gaming</span>
      </div>
      </Link>

    {/* Watches */}
     <Link to="/products/category/watches">
       <div data-testid="category" className="bg-white px-5 py-3 h-80 xl:h-95 2xl:h-140 flex flex-col justify-between">
        <h1 className="font-bold mb-2">Fashion trends you like</h1>
        <div className="grid grid-cols-2 gap-2 text-xs 2xl:text-lg"> 
          <div>
             <img className="" alt="" src={IMG_URL_TWO + "BAU2024Aug/WomenWatches_2x._SY232_CB564394432_.jpg" }/>
             <span>Dresses</span>
          </div>
          <div>
             <img className="" alt="" src={IMG_URL_TWO + "BAU2024Aug/MenWatches_2x._SY232_CB564394432_.jpg" }/>
              <span>Knits</span>
          </div>
          <div>
            <img className="" alt="" src={IMG_URL_TWO + "BAU2024Aug/GirlWatches_2x._SY232_CB564394432_.jpg" }/>
            <span>Jackets</span>
          </div>
          <div>
            <img className="" alt="" src={IMG_URL_TWO + "/BAU2024Aug/BoyWatches_2x._SY232_CB564394432_.jpg" }/>
            <span>Jewlery</span>
          </div>
         
          </div>
        <span className=" text-xs 2xl:text-lg text-blue-600">Shop gaming</span>
      </div>
      </Link>

    {/* Beauty */}
       <Link to="/products/category/beauty">
          <div data-testid="category" className="bg-white px-5 py-3 h-80 xl:h-95 2xl:h-140 flex flex-col justify-between">
        <h1 className="font-bold mb-2">Kitchen appliances</h1>
          <div>
            <img alt="" src={IMG_URL_TWO + "DskBTFQuadCards/Fuji_BTF_Quad_Cards_2x_Make-up._SY232_CB558654384_.jpg"} />
            <span className="text-xs 2xl:text-lg">Cooker</span>
          </div>
       
        <div className="grid grid-cols-3 gap- text-xs 2xl:text-lg2">
          <div>
            <img alt="" src={IMG_URL_TWO + "DskBTFQuadCards/Fuji_BTF_Quad_Cards_2x_Brushes._SY232_CB558654384_.jpg" }/>
            <span>Coffee</span>
          </div>

           <div>
           <img  alt="" src={IMG_URL_TWO + "DskBTFQuadCards/Fuji_BTF_Quad_Cards_2x_Sponges._SY232_CB558654384_.jpg" }/>
            <span>Pots and Pans</span>
          </div>

           <div>
            <img alt="" src={IMG_URL_TWO + "DskBTFQuadCards/Fuji_BTF_Quad_Cards_2x_Mirrors._SY232_CB558654384_.jpg"} />
            <span>Kettles</span>
          </div>

        </div>
        <span className=" text-xs 2xl:text-lg text-blue-600">Shop gaming</span>
      </div>
       </Link>

   {/* Bags */}
       <Link to="/products/category/bags">
          <div data-testid="category" className="bg-white px-5 py-3 h-80 xl:h-95 2xl:h-140 flex flex-col justify-between ">
        <h1 className="font-bold mb-2"> Kitchen appliances</h1>
          <div>
            <img alt="" src={IMG_URL_TWO + "BAU2024Aug/Backpack_2x._SY232_CB566100767_.jpg"} />
            <span className="text-xs 2xl:text-lg">Cooker</span>
          </div>
       
        <div className="grid grid-cols-3 gap-2 text-xs 2xl:text-lg">
          <div>
            <img alt="" src={IMG_URL_TWO + "BAU2024Aug/TravelBag_2x._SY232_CB566100767_.jpg" }/>
            <span>Coffee</span>
          </div>

           <div>
           <img  alt="" src={IMG_URL_TWO + "BAU2024Aug/Accessories_2x._SY232_CB566100767_.jpg" }/>
            <span>Pots and Pans</span>
          </div>

           <div>
            <img alt="" src={IMG_URL_TWO + "BAU2024Aug/Handbags_2x._SY232_CB566100767_.jpg"} />
            <span>Kettles</span>
          </div>

        </div>
        <span className=" text-xs 2xl:text-lg text-blue-600">Shop gaming</span>
      </div>
       </Link>
    {/* groceries */}
       <Link to="/products/category/vehicle">
          <div data-testid="category" className="bg-white px-5 py-3 h-80 xl:h-95 2xl:h-140 flex flex-col justify-between ">
        <h1 className="font-bold mb-2">Kitchen appliances</h1>
          <div>
            <img alt="" src={IMG_URL_TWO + "BAU2024Aug/Backpack_2x._SY232_CB566100767_.jpg"} />
            <span className="text-xs 2xl:text-lg">Cooker</span>
          </div>
       
        <div className="grid grid-cols-3 gap-2 text-xs 2xl:text-lg">
          <div>
            <img alt="" src={IMG_URL_TWO + "BAU2024Aug/TravelBag_2x._SY232_CB566100767_.jpg" }/>
            <span>Coffee</span>
          </div>

           <div>
           <img  alt="" src={IMG_URL_TWO + "BAU2024Aug/Accessories_2x._SY232_CB566100767_.jpg" }/>
            <span>Pots and Pans</span>
          </div>

           <div>
            <img alt="" src={IMG_URL_TWO + "BAU2024Aug/Handbags_2x._SY232_CB566100767_.jpg"} />
            <span>Kettles</span>
          </div>

        </div>
        <span className=" text-xs 2xl:text-lg text-blue-600">Shop gaming</span>
      </div>
       </Link>

      
    </div>
  )
}

export default CatogeriesSection
