import {NavLink}from 'react-router-dom'
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaLocationDot,FaSquarePhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
const Footer=()=>{
    return (
        <footer className="grid grid-cols-2 px-3 space-y-5 bg-black text-white md:grid-cols-3 text-center py-15">
            <div className='space-y-5'>
                <h1>heading</h1>
                <p>Lorem ipsum dolor sit amet.</p>
                <div className='flex justify-center space-x-4 '>
                    <FaWhatsapp  size={50}  className='footer-icons'/>
                    <CiFacebook  size={50}  className='footer-icons'/>
                    <FaInstagram size={50}   className='footer-icons'/>
                </div>
            </div>
            <div className="flex flex-col space-y-3">     
                <li ><NavLink className='links ' to="/">Home</NavLink></li>
                <li><NavLink className='links' to="/product">Products</NavLink></li>
                <li><NavLink className='links' to="/About">About</NavLink></li>
                <li><NavLink className='links' to="/Contact">Contact</NavLink></li>

            </div>

            <div className='flex flex-col space-y-4 items-center'>
                <div className='flex items-center'>
                     <FaLocationDot /> 
                    <h1>our location</h1>
                </div>
               <div className='flex items-center'>
                    <FaSquarePhone />
                    <h1>our phone</h1>
                </div>
                <div className='flex items-center'>
                    <MdOutlineMail/>
                    <h1>our email</h1>
                </div>
            </div>
        </footer>
    )
}
export default Footer;