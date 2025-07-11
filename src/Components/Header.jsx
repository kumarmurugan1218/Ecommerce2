
import Navbar from './Navbar'
import { NavLink} from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { CiSearch,CiShoppingCart} from "react-icons/ci";
import { LuUser } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { cartcontext } from '../App';

export const Header = () => {
  const {cart,dispatch}=useContext(cartcontext);
  const[count,setCount]=useState(0);
     const [data,setData]=useState("")
    let [menu,setMenu]=useState(false);
    const [arr,setArr]=useState(["mensshirts","mensshoes","menswatches","womensdresses","womensshoes","womensjewellery","smartphones","laptops","headphones"]);
    const [list,setList]=useState(false);
 
  const filtered = arr.filter((item) =>
    item.toLowerCase().includes(data.toLowerCase())
  );
    useEffect(()=>{
      setCount(cart.length)
    },[cart])

    
  

  return (
    <header className='flex  w-full flex-col relative justify-center '  >

            <div className='flex  flex-col gap-y-5 items-center justify-between py-5  shadow-sm px-5 sm:flex-row ' >
                <div className='md:w-1/3'>
                    <h1 className='logo'>products</h1>
                </div>

                <div className='w-2/3 flex flex-col  relative   ' >
                      <div className='flex items-center border-2 rounded p-1   md:w-[80%]' >
                          <input type="text" className='input-box ' 
                      onChange={(e)=>{
                        setData(e.target.value);
                      } }  onFocus={()=>{
                          setList(true)

                      }}
                        onBlur={() => setTimeout(() => setList(false),100)}
                      />
                        <CiSearch size={35} className='' />
                      </div>
                      <div className='relative z-10 rounded  md:w-[80%] bg-red-500'>
                              <ul className='bg-gray-300 shadow-xl absolute top-2 space-y-5 text-center w-full '>
                                    {list&&arr.map((a,i)=>(<li key={i} > 
                                          <NavLink to={`product/${a.toLowerCase()}`} className='hover:text-white hover:border-b-2' >{a.toUpperCase()}</NavLink>
                                                </li>))}
                                  </ul>
                      </div>
                </div>
                
        
                 <div className='flex gap-x-4 items-center '>
                  <NavLink to='Cart' className='links relative'><CiShoppingCart size={35} /> <p className='cart-count' >{count}</p></NavLink>
                  <NavLink to='Login'className='links'><LuUser size={35}/></NavLink>
                  <button className='menu' onClick={()=>{
                   setMenu(true)
                  }}>
                <GiHamburgerMenu size={35} className='my-auto'/>
                  </button>
                </div>  
            </div>
           
        
           <div className='text-center '>
               <Navbar menu={menu} setMenu={setMenu} list={list} arr={arr}/>
            </div> 
     
    </header>
  )
}