import {IMG_URL , IMG_URL_TWO, IMG_URL_STORE} from "../utils/constants";
import { Link } from "react-router";
const CatogeriesSection = () => {
  return (
    <div className="grid grid-cols-4 gap-4 -mt-90 z-40 sticky bg-gray-200 ">

      {/* Gaming */}
      <Link to="/products/category/devices"> 
      <div className="bg-white px-5 py-3 h-100">
        <h1 className="font-bold text-xl mb-2">Get your game on</h1>
        <img className="mb-4" alt="" src={IMG_URL_TWO+ "Stores-Gaming/FinalGraphics/Fuji_Gaming_store_Dashboard_card_2x_EN._SY608_CB564799420_.jpg" } />
        <span className="text-xs text-blue-600">Shop gaming</span>
      </div>
      </Link>
      
      {/* home */}
       <Link to="/products/category/home"> 
       <div className="bg-white px-5 py-3 h-100">
        <h1 className="font-bold text-xl mb-2">Shop for your home essentials</h1> 
        <div className="grid grid-cols-2 gap-4">

            <div>
           <img alt="" src={IMG_URL_TWO+"BAU2024Sept/CleaningTool_2x._SY232_CB563137408_.jpg" } />
            <span className="text-xs">Cleaning Tools</span>
          </div>

           <div>
            <img  alt="" src={IMG_URL_TWO+"BAU2024Sept/HomeStorage_2x._SY232_CB563137408_.jpg" } />
            <span className="text-xs">Home Storage</span>
          </div>

           <div>
             <img alt="" src={IMG_URL_TWO+"BAU2024Sept/HomeDecor_2x._SY232_CB563137408_.jpg"} />
            <span className="text-xs">Home Decor</span>
          </div>

           <div>
            <img alt="" src={IMG_URL_TWO+"BAU2024Sept/Bedding_2x._SY232_CB563137408_.jpg" } />
            <span className="text-xs">Bedding</span>
          </div>
        
        </div>
        <span className="text-xs text-blue-600">Shop gaming</span>
      </div>
      </Link>

       {/* Groceries */}
       <Link to="/products/category/groceries">
          <div className="bg-white px-5 py-3 h-100">
        <h1 className="font-bold text-xl mb-2">Top categories in Kitchen appliances</h1>
          <div>
            <img alt="" src={IMG_URL + "313wAT6Iy2L._SY320_.jpg"} />
            <span className="text-xs">Cooker</span>
          </div>
       
        <div className="grid grid-cols-3 gap-2">
          <div>
            <img alt="" src={IMG_URL + "21W7-lndINL._SY150_.jpg" }/>
            <span className="text-xs">Coffee</span>
          </div>

           <div>
           <img  alt="" src={IMG_URL + "21B-NkA9p-L._SY150_.jpg" }/>
            <span className="text-xs">Pots and Pans</span>
          </div>

           <div>
            <img alt="" src={IMG_URL + "217GQ1a2QzL._SY150_.jpg"} />
            <span className="text-xs">Kettles</span>
          </div>

        </div>
        <span className="text-xs text-blue-600">Shop gaming</span>
      </div>
       
       </Link>
    
       {/* fashion */}
       <Link to="/products/category/fashion">
       <div className="bg-white px-5 py-3 h-100">
        <h1 className="font-bold text-xl mb-2">Fashion trends you like</h1>
        <div className="grid grid-cols-2 gap-2"> 
          <div>
             <img className="" alt="" src={IMG_URL_STORE + "_2_x2._SY232_CB595261253_.jpg" }/>
             <span className="text-xs">Dresses</span>
          </div>
          <div>
             <img className="" alt="" src={IMG_URL_STORE + "_3_x2._SY232_CB595261253_.jpg" }/>
              <span className="text-xs">Knits</span>
          </div>
          <div>
            <img className="" alt="" src={IMG_URL_STORE + "_1_x2._SY232_CB595261253_.jpg" }/>
            <span className="text-xs">Jackets</span>
          </div>
          <div>
            <img className="" alt="" src={IMG_URL_STORE + "_4_x2._SY232_CB595261253_.jpg" }/>
            <span className="text-xs">Jewlery</span>
          </div>
         
          </div>
        <span className="text-xs text-blue-600">Shop gaming</span>
      </div>
      </Link>

    {/* Watches */}
     <Link to="/products/category/watches">
       <div className="bg-white px-5 py-3 h-100">
        <h1 className="font-bold text-xl mb-2">Fashion trends you like</h1>
        <div className="grid grid-cols-2 gap-2"> 
          <div>
             <img className="" alt="" src={IMG_URL_TWO + "BAU2024Aug/WomenWatches_2x._SY232_CB564394432_.jpg" }/>
             <span className="text-xs">Dresses</span>
          </div>
          <div>
             <img className="" alt="" src={IMG_URL_TWO + "BAU2024Aug/MenWatches_2x._SY232_CB564394432_.jpg" }/>
              <span className="text-xs">Knits</span>
          </div>
          <div>
            <img className="" alt="" src={IMG_URL_TWO + "BAU2024Aug/GirlWatches_2x._SY232_CB564394432_.jpg" }/>
            <span className="text-xs">Jackets</span>
          </div>
          <div>
            <img className="" alt="" src={IMG_URL_TWO + "/BAU2024Aug/BoyWatches_2x._SY232_CB564394432_.jpg" }/>
            <span className="text-xs">Jewlery</span>
          </div>
         
          </div>
        <span className="text-xs text-blue-600">Shop gaming</span>
      </div>
      </Link>

    {/* Beauty */}
       <Link to="/products/category/beauty">
          <div className="bg-white px-5 py-3 h-100">
        <h1 className="font-bold text-xl mb-2">Top categories in Kitchen appliances</h1>
          <div>
            <img alt="" src={IMG_URL_TWO + "DskBTFQuadCards/Fuji_BTF_Quad_Cards_2x_Make-up._SY232_CB558654384_.jpg"} />
            <span className="text-xs">Cooker</span>
          </div>
       
        <div className="grid grid-cols-3 gap-2">
          <div>
            <img alt="" src={IMG_URL_TWO + "DskBTFQuadCards/Fuji_BTF_Quad_Cards_2x_Brushes._SY232_CB558654384_.jpg" }/>
            <span className="text-xs">Coffee</span>
          </div>

           <div>
           <img  alt="" src={IMG_URL_TWO + "DskBTFQuadCards/Fuji_BTF_Quad_Cards_2x_Sponges._SY232_CB558654384_.jpg" }/>
            <span className="text-xs">Pots and Pans</span>
          </div>

           <div>
            <img alt="" src={IMG_URL_TWO + "DskBTFQuadCards/Fuji_BTF_Quad_Cards_2x_Mirrors._SY232_CB558654384_.jpg"} />
            <span className="text-xs">Kettles</span>
          </div>

        </div>
        <span className="text-xs text-blue-600">Shop gaming</span>
      </div>
       </Link>

   {/* Bags */}
       <Link to="/products/category/bags">
          <div className="bg-white px-5 py-3 h-100">
        <h1 className="font-bold text-xl mb-2">Top categories in Kitchen appliances</h1>
          <div>
            <img alt="" src={IMG_URL_TWO + "BAU2024Aug/Backpack_2x._SY232_CB566100767_.jpg"} />
            <span className="text-xs">Cooker</span>
          </div>
       
        <div className="grid grid-cols-3 gap-2">
          <div>
            <img alt="" src={IMG_URL_TWO + "BAU2024Aug/TravelBag_2x._SY232_CB566100767_.jpg" }/>
            <span className="text-xs">Coffee</span>
          </div>

           <div>
           <img  alt="" src={IMG_URL_TWO + "BAU2024Aug/Accessories_2x._SY232_CB566100767_.jpg" }/>
            <span className="text-xs">Pots and Pans</span>
          </div>

           <div>
            <img alt="" src={IMG_URL_TWO + "BAU2024Aug/Handbags_2x._SY232_CB566100767_.jpg"} />
            <span className="text-xs">Kettles</span>
          </div>

        </div>
        <span className="text-xs text-blue-600">Shop gaming</span>
      </div>
       </Link>


   

    

      
    </div>
  )
}

export default CatogeriesSection
