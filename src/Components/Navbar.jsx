
import {NavLink} from 'react-router-dom';
import { MdOutlineCancel } from "react-icons/md";
import { useEffect, useRef } from 'react';
const Navbar = ({menu,setMenu,list,arr}) => {
  const inputref=useRef(null);
  return (
    <section className='w-full '>

    
   {menu&&<nav className='fixed top-0 left-0 h-full z-50 bg-white shadow-lg  w-1/2  ' ref={inputref}>
      <ul onClick={()=>setMenu(!menu)}className='flex  flex-col justify-center pt-10 w-full  space-y-5 mt-3 '>
        <li className='w-full'><NavLink  className='links' to='/' >Home</NavLink></li>
        <li className='w-full'><NavLink  className='links' to="product">products</NavLink></li>
        <li className='w-full'><NavLink  className='links' to="About">About</NavLink></li>
        <li className='w-full'><NavLink  className='links' to="Contact">Contact</NavLink></li>
        
      </ul>
      <button className='absolute top-5 right-5  ' onClick={()=>{
        setMenu(false)
      }}><MdOutlineCancel  className=' hover:bg-red-500 hover:text-white rounded-full duration-300' size={40} /></button>
    </nav>} 

     <nav className='hidden space-x-5 py-4 shadow-md md:block'>
      <ul className='flex justify-center space-x-5 '>
        <li ><NavLink className='links ' to="/">Home</NavLink></li>
        <li><NavLink className='links' to="product">Products</NavLink></li>
        <li><NavLink className='links' to="About">About</NavLink></li>
        <li><NavLink className='links' to="Contact">Contact</NavLink></li>
      </ul>
       
    </nav>
    </section>
  )
}

export default Navbar
