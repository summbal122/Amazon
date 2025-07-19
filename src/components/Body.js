import {data} from "../data"
import { Outlet } from "react-router"
const Body = () => {
  return (
    <div className="bg-gray-200">
      <div className="hidden md:block">
      <ul className='bg-navy-light text-sm 2xl:text-xl text-white flex gap-1 font-semibold px-5'>
        <li className='border border-transparent hover:border-white hover:cursor-pointer  md:p-2 2xl:p-4'> <i className="fa-solid fa-bars mr-1 text-sm md:text-lg 2xl:text-2xl"></i>All</li>
       {data.map((value, i) => (
       <li 
       key={i}
       className="border border-transparent hover:border-white hover:cursor-pointer mr-0.5 md:mr-0 md:p-2 2xl:p-4" >
       {value}
       </li>
       ))}
      </ul>
      </div>
      <Outlet/>
      
    </div>
  )
}

export default Body
