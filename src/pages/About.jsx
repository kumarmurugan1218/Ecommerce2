

const About = () => {
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
console.log(import.meta.env.BASE_URL)
  return (
   <section class="min-h-screen bg-gray-900 w-full text-white py-5  text-center">
      <h1 class="heading">About Us</h1>
      
      <div className=' grid  gap-y-5 '>
        
        {aboutcontent.map((p,i)=>(
          <div  key={i} className='flex flex-col  py-5 gap-x-5 md:flex-row space-y-5'>
         <div className=' w-1/2  mx-auto my-auto'>
            <img src={`${import.meta.env.BASE_URL}${p.img}`} alt="" className='w-full h-full mx-auto object-cover' />
          </div>
          
          <div className='w-1/2 my-auto mx-auto'>
            <h1 className='sub-heading'>{p.name}</h1>
            <p className='text-justify'>{p.para}</p>
          </div>
          
        </div>
        ))}

        
 
      </div>
  </section>

  )
}

export default About
