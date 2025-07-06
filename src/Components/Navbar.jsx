
import {NavLink} from 'react-router-dom';
import { MdOutlineCancel } from "react-icons/md";
const Navbar = ({menu,setMenu,list,arr}) => {
  return (
    <>

    
   {menu&&<nav className='fixed top-0 left-0 h-full z-50 bg-white shadow-lg p-10 w-1/2  '>
      <ul className='grid w-full space-y-10 mt-3 '>
        <li><NavLink className='links ' to='/'>Home</NavLink></li>
        <li><NavLink className='links' to="product">products</NavLink></li>
        <li><NavLink className='links' to="About">About</NavLink></li>
        <li><NavLink className='links' to="Contact">Contact</NavLink></li>
        
      </ul>
      <button className='absolute top-5 right-5 ' onClick={()=>{
        setMenu(false)
      }}><MdOutlineCancel  size={40} /></button>
    </nav>} 
     <nav className='hidden space-x-5 py-4 shadow-md w-screen md:block'>
      <ul className='flex justify-center space-x-5'>
        <li ><NavLink className='links ' to="/">Home</NavLink></li>
        <li><NavLink className='links' to="product">Products</NavLink></li>
        <li><NavLink className='links' to="About">About</NavLink></li>
        <li><NavLink className='links' to="Contact">Contact</NavLink></li>
      </ul>
       
    </nav>
    </>
  )
}

export default Navbar
