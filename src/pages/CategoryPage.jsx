import { useParams } from 'react-router-dom';
import allproducts from '../data/products2.json';
import { useContext} from 'react';
import { cartcontext } from '../App'
import { CiShoppingCart } from "react-icons/ci";

const CategoryPage = () => {
  const {cart,setCart}=useContext(cartcontext);
    const {category}=useParams();
  const filtered=allproducts.filter((p)=>p.category==category)
  return (
    <div className=' px-20 py-5'>
       <h1 className="text-2xl font-bold text-center mb-3"> {category}</h1>
       <div className=' min-h-screen grid grid-cols-2 gap-15 place-content-center md:grid-cols-3 xl:grid-cols-4'>
        {filtered.map((product)=>(
        <div className=' flex flex-col product-scaleup  ' key={product.id}>
            <div className='h-full w-full  relative rounded-md '>
              <img src={`${import.meta.env.BASE_URL}${product.img}`} className="cat-cart " alt="no image" />
          {cart.includes(product)? <button className='remove-btn' onClick={()=>{
                 setCart(cart.filter((c)=>c.id!==product.id))
            }} >remove cart <CiShoppingCart /></button>:<button className='add-btn' onClick={()=>{

 setCart([...cart,product])
            }} >add cart <CiShoppingCart /></button>}
         
            </div>
            <div className='flex justify-around py-5'>
                  <h1>{product.name}</h1>
                  <p>price : {product.price}</p>
            </div> 
          </div>))}
        </div>
    </div>
  )
}

export default CategoryPage
