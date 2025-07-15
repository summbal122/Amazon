import {data} from "../data"
import MainSection from "./MainSection"
import { Outlet } from "react-router"
const Body = () => {
  return (
    <div >
      <ul className='bg-navy-light text-sm text-white flex gap-1 font-semibold px-5'>
        <li className='border border-transparent hover:border-white hover:cursor-pointer p-2'> <i className="fa-solid fa-bars mr-1 text-lg"></i>All</li>
       {data.map((value, i) => (
       <li 
       key={i}
       className="border border-transparent hover:border-white hover:cursor-pointer p-2" >
       {value}
       </li>
       ))}
      </ul>
      <Outlet/>
      
    </div>
  )
}

export default Body
