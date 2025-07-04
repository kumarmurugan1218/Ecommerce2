import React, { useEffect, useState } from 'react'
const Home = () => {
    const aboutcontent=[{name:"mobiles",
    para:"We bring you the newest smartphones from top global brands. Whether you need powerful cameras, fast processors, or all-day battery life — our mobiles deliver performance and value.",
    img:  "/images/home/4.jpg"
  },
  {
    name:"Women’s Dress",
    para:"We bring you the newest smartphones from top global brands. Whether you need powerful cameras, fast processors, or all-day battery life — our mobiles deliver performance and value",
    img:"/images/home/7.avif"
  },
    {
    name:"Men’s Dress",
    para:"We bring you the newest smartphones from top global brands. Whether you need powerful cameras, fast processors, or all-day battery life — our mobiles deliver performance and value.",
    img:"/images/home/5.jpg"
  },
   {
    name:"Laptops",
    para:"We bring you the newest smartphones from top global brands. Whether you need powerful cameras, fast processors, or all-day battery life — our mobiles deliver performance and value.",
    img: "/images/home/2.jpg"
  },  {
    name:"Watches",
    para:"We bring you the newest smartphones from top global brands. Whether you need powerful cameras, fast processors, or all-day battery life — our mobiles deliver performance and value.",
    img: "/images/home/6.webp"
  }
  
]
 const images=[
     "/images/home/1.jpg",
     "/images/home/2.jpg",
      "/images/home/3.webp",
    "/images/home/4.jpg",
    "/images/home/5.jpg",
    "/images/home/6.webp",
    "/images/home/7.avif",
    "/images/home/8.webp",
    "/images/home/9.webp"
    ];
const [count,setCount]=useState(0);

useEffect(()=>{
const loading=setInterval(()=>{
     setCount(prev => (prev + 1) % images.length); 
    },5000)
    return ()=>{
      clearInterval(loading);
    }
},[])
 
   
     

  return (
    <section className='  '>
        <div className='h-full w-full pt-10'>
          <img src={images[count]} alt="" className='h-full w-full object-cover '/>
        </div>
        <div className='min-h-screen grid  gap-y- bg-gray-900 text-white'>
        {aboutcontent.map((p,i)=>(
          <div  key={i} className='flex flex-col  py-5 gap-x-5 md:flex-row space-y-2 md:px-20'>
          <div className='w-1/2 my-auto mx-auto'>
            <h2 className='sub-heading'>{p.name} :</h2>
            <p className=' text-justify'>{p.para}</p>
          </div>
          <div className=' w-1/2  mx-auto my-auto'>
            <img src={p.img} alt="" className='w-full h-full mx-auto object-cover' />
          </div>
        </div>
        ))}
      </div>
    </section>
  )
}

export default Home;
