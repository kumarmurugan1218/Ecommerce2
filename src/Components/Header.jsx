
import Navbar from './Navbar'
import { NavLink} from 'react-router-dom';
import { useContext, useEffect, useRef, useState } from 'react';
import { CiSearch,CiShoppingCart} from "react-icons/ci";
import { LuUser } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { cartcontext } from '../App';

export const Header = () => {
  const {cart,setCart}=useContext(cartcontext);
  const[count,setCount]=useState(0);
     const [data,setData]=useState("")
    let [menu,setMenu]=useState(false);
    const [arr,setArr]=useState(["mens-shirts","mens-shoes","mens-watches","womens-dresses","womens-shoes","womens-jewellery","smartphones","laptops","headphones"]);
    const [list,setList]=useState(false);
 
  const filtered = arr.filter((item) =>
    item.toLowerCase().includes(data.toLowerCase())
  );
    useEffect(()=>{
      setCount(cart.length)
    },[cart])

  

  return (
    <header className='flex flex-col relative justify-center' >
            <div className='flex justify-between px-10 py-3 shadow-sm space-x-5' >
                <div className=''>
                    <h1 className='logo'>logo</h1>
                </div>

                <div className='flex flex-col border-2 rounded p-1 relative md:w-[500px]' >
                  <div>
                      <div className='flex items-center'>
                          <input type="text" className='input-box' 
                      onChange={(e)=>{
                        setData(e.target.value);
                      } }  onFocus={()=>{
                          setList(true)
                      }}
                        onBlur={() => setTimeout(() => setList(false),100)}
                      />
                        <CiSearch size={25} className='' />
                      </div>
                      <div className='relative z-10'>
                           <ul className='bg-gray-100 shadow-xl absolute top-2 w-full  space-y-5 text-center '>
                                {list&&arr.map((a,i)=>(<li key={i} > 
                                      <NavLink to={`/product/${a.toLowerCase()}`} className='links' >{a.toUpperCase()}</NavLink>
                                            </li>))}
                              </ul>
                      </div>
                    </div>
                </div>
                
        
                <div className='flex space-x-5 items-center'>
                  <NavLink to='/Cart' className='links relative'><CiShoppingCart size={30} /> <p className='cart-count' >{count}</p></NavLink>
                  <NavLink to='/Login'className='links'><LuUser size={30}/></NavLink>
                  <button className='menu' onClick={()=>{
                   setMenu(true)
                  }}>
                <GiHamburgerMenu size={30} className='my-auto'/>
                  </button>
                </div> 
            </div>
           
        
           <div className='text-center '>
               <Navbar menu={menu} setMenu={setMenu} list={list} arr={arr}/>
            </div>
     
    </header>
  )
}
