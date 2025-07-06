
import { useContext,useEffect,useState } from 'react';
import { MdOutlineCancel } from "react-icons/md";
import { cartcontext } from '../App';

const Cart = () => {
    const {cart,setCart}=useContext(cartcontext);
    let [total,setTotal]=useState(0);
    let [qty,setQty]=useState(1);
  useEffect(()=>{
      let price=0;
    cart.map((c)=>c.price).forEach((p)=>price+=p);
    setTotal((total)=>total=price);
  },[cart])

  return (
    <section className=' min-h-screen w-full md:px-20 md:space-y-5 '>
        <h1 className='heading '>cart</h1>
        <div className='space-y-5 w-full h-full '>
          {cart.map((c,i)=>(
            <div key={c.id}  className='flex w-full  justify-evenly  items-center  cart w-1/2  mx-auto md:Full'> 
                <div className='h-[300px] '> 
                 <img src={`${import.meta.env.BASE_URL}${c.img}`} className='h-full w-full object-contain' alt="noimage" />
                 </div>

                <div className='flex flex-col'>
                  <h1 className='text-xl font-semibold'>  {c.name}</h1>
                </div>

                <div>
                  <p className='text-xl font-bold'>{qty*c.price}</p>
                </div>
                
                <button className='text-2xl cancel-btn ' onClick={()=>{
           
                  setCart(cart.filter((car)=>car.id!==c.id))

                }}><MdOutlineCancel  size={40} /></button>
            </div>))}
            <div className='shadow-md mt-15   w-full'> 
                <h1 className='heading '>order details</h1>
                    <div className='flex  justify-between items-center p-5 '>
                        <h2 className='text-1xl font-bold'> total price</h2>
                        <h2 className='text-1xl font-bold pr-5'>{total}</h2>
                    </div>
            </div>
        </div>
      
    </section>
  )
}

export default Cart
