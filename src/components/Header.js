import { Link, useNavigate } from "react-router"
import { useSelector } from "react-redux"
import { useState } from "react";
const Header = () => {
  const navigate = useNavigate();
  const [query , setQuery] = useState("");
  const handleSearch = (e)=> {
   e.preventDefault();
   navigate(`/search?search=${query}`)
   setQuery("");
  } 
   const cartItems = useSelector((store) => store.cart.cartItems);
   const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <div id="top-section" className="bg-navy-blue w-full grid lg:grid-cols-12 text-white py-2 lg:px-5 2xl:px-8 2xl:py-4 font-medium xl:gap-4 text-[12px] xl:text-xs 2xl:text-xl">
      {/* left section */}
     <div className="flex items-center justify-between lg:justify-center xl:gap-4 lg:col-span-2">
      <Link to="/">
      <img className="w-22 2xl:w-32 border border-transparent hover:border-white hover:cursor-pointer p-2" 
      alt="Amazon logo" 
      src="https://www.pngplay.com/wp-content/uploads/3/White-Amazon-Logo-PNG-HD-Quality.png"/></Link>
      <div className="hidden lg:block">
      <div className="flex items-center gap-2 text-sm 2xl:text-2xl border border-transparent hover:border-white hover:cursor-pointer p-2">
      <i className="fa-solid fa-location-dot xl:text-lg"></i>
      <div >
      <p className="text-gray-dark leading-tight text-[10px] xl:text-xs">
        Deliver to </p>
      <span className="block text-white font-bold text-xs xl:text-md">Pakistan</span>
      </div>
      </div>
      </div>

        {/* for smaller screen */}
     <div className="block lg:hidden p-2"> 
     <div className="flex items-center text-lg space-x-3 ">
       <div className="flex ml-auto">
        <Link to="/cart">
         <div className="flex flex-col leading-2.5">
         <span className="text-center text-[10px]  text-yellow-light">{totalItems}</span>
         <i className="fa-solid fa-cart-shopping mb-1 "></i>
          </div>
         </Link>
      </div>
      <i className="fa-solid fa-bars"></i>
      </div>
    </div>
     </div>

    
     
     {/* Search Section */}
     <form onSubmit={handleSearch} className="lg:col-span-6 xl:col-span-7 flex p-3">
      <button className="bg-gray-light text-gray-600 px-3 text-md  border-1 border-gray-light rounded-l-md">All <i className="ml-1 fa-solid fa-caret-down 2xl:text-lg hover:cursor-pointer"></i></button>
      <input
       name = "search"
       value ={query}
       onChange={(e)=> {
       setQuery(e.target.value);
      }} className="flex-1 bg-white text-gray-950 px-3 text-[13px] text-lg outline-dark-orange placeholder:2xl:text-lg " placeholder="Search Amazon"></input>
      <button  className="bg-dark-orange rounded-r-md hover:cursor-pointer"><i className="fa-solid fa-magnifying-glass text-navy-blue p-3 2xl:p-5  text-xl"></i></button>
      
     </form>
     
     {/* right section */}
     <div className="hidden lg:block lg:col-span-4 xl:col-span-3 p-2">
     <div className=" 2xl:text-xl flex justify-between items-center">
      <h1 className="text-[11px] 2xl:text-xl border border-transparent hover:border-white hover:cursor-pointer p-2">EN <i className="fa-solid fa-caret-down text-xs 2xl:text-xl"></i></h1>
      <p className="text-center border border-transparent hover:border-white hover:cursor-pointer p-2">Hello, sign in 
        <span className="block text-[11px] 2xl:text-lg font-bold">Accounts & Lists <i className="fa-solid fa-caret-down text-xs"></i></span>
      </p>
      <p className="text-center border border-transparent hover:border-white hover:cursor-pointer p-2">Returns 
        <span className="block text-[11px] 2xl:text-lg font-bold">& Orders</span>
      </p>
      <div className="flex items-end border border-transparent hover:border-white hover:cursor-pointer px-2 py-3">
       
        <Link to="/cart">
         <div className="flex flex-col leading-2.5">
         <span className="text-center text-[10px] 2xl:text-lg text-yellow-light">{totalItems}</span>
         <i className="fa-solid fa-cart-shopping text-xl 2xl:text-3xl mr-1 "></i>
          </div>
         </Link>
         <p className="text-xs 2xl:text-lg">Cart</p>
      
      </div>
      

     </div>
     </div>
    
      
    </div>
  )
}

export default Header
