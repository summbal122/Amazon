
const Header = () => {
  return (
    <div className="bg-navy-blue w-full grid grid-cols-12 text-white py-2 px-5 font-medium gap-4 text-xs">
     <div className="flex items-center justify-center gap-4 col-span-2 ">
      <img className="w-22 border border-transparent hover:border-white hover:cursor-pointer p-2" alt="Amazon logo" src="https://www.pngplay.com/wp-content/uploads/3/White-Amazon-Logo-PNG-HD-Quality.png"/>
      <div className="flex items-center gap-2 text-sm border border-transparent hover:border-white hover:cursor-pointer p-2">
      <i className="fa-solid fa-location-dot text-lg"></i>
      <div>
      <p className="text-gray-dark leading-tight text-xs">
        Deliver to </p>
      <span className="block text-white font-bold text-md">Pakistan</span>
      </div>
      </div>
     </div>
     
     {/* Search Section */}
     <form className="col-span-7 flex">
      <button className="bg-gray-light text-gray-600 p-2 rounded-l-md">All <i className="ml-1 fa-solid fa-caret-down text-xs"></i></button>
      <input className="flex-1 bg-white text-gray-950 p-2 text-[13px]" placeholder="Search Amazon"></input>
      <button className="bg-dark-orange rounded-r-md"><i className="fa-solid fa-magnifying-glass text-navy-blue p-3 text-lg"></i></button>
     </form>

     <div className="col-span-3 flex justify-between items-center">
      <h1 className="text-[13px] border border-transparent hover:border-white hover:cursor-pointer p-2">EN <i className="fa-solid fa-caret-down text-xs"></i></h1>
      <p className="text-center border border-transparent hover:border-white hover:cursor-pointer p-2">Hello, sign in 
        <span className="block text-[13px] font-bold">Accounts & Lists <i className="fa-solid fa-caret-down text-xs"></i></span>
      </p>
      <p className="text-center border border-transparent hover:border-white hover:cursor-pointer p-2">Returns 
        <span className="block text-[13px] font-bold">& Orders</span>
      </p>
      <div className="border border-transparent hover:border-white hover:cursor-pointer p-2">
      <i className="fa-solid fa-cart-shopping text-xl mr-1"></i>
      <span>cart</span>
      </div>

     </div>
      
    </div>
  )
}

export default Header
