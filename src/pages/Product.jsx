import {Link} from 'react-router-dom';
import allproducts from '../data/products2.json';

const Product = () => {
  const images=[
     "/images/home/5.jpg",
     "/images/home/3.webp",
      "/images/home/6.webp",
    "/images/home/7.avif",
    "/images/home/9.webp",
    "/images/home/8.webp",
     "/images/home/4.jpg",
   "/images/home/2.jpg",
     "/images/home/1.jpg"
    ];
    const filtered=[...new Set(allproducts.map((p)=>p.category))]
  return (
    <section className='min-h-screen py-5'>
    <h1 className='heading'>Products</h1>
    <div className="grid  grid-cols-2 gap-y-5 place-items-center gap-x-15 py-5 md:grid-cols-3 px-10 ">
             {filtered.map((p,i)=>(<Link key={i} to={`/product/${p}`} className='product-scaleup shadow-xl rounded-xl' >
             <div  className=' p-5 h-[300px] relative'>
              <img src={`${import.meta.env.BASE_URL}${images[i]}`} className="h-full object-cover" alt="" />
               <h1 className=' text-center '>{p}</h1>
             </div> 
             </Link>))}
            
           
        
    </div>
     
    </section>
  )
}

export default Product
