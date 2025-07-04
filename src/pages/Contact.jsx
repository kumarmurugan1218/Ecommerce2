import { CgMail  } from "react-icons/cg";
import { MdOutlineLocalPhone,MdOutlineMail,MdDriveFileRenameOutline } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { FiMessageCircle } from "react-icons/fi";
const Contact = () => {
  return (
    <section className='container '>
        <h1 className='heading '>our Contact </h1>
        <div className="flex flex-col  mx-auto justify-center space-y-5 shadow-2xl md:w-1/2 py-10  rounded-xl ">
            <div className='flex justify-center space-x-10 items-center '>
                <div className='contact space-x-10 py-3'>
                    <div><CgMail size={40} className="text-amber-600"/></div>
                    <div>
                        <h1>our mail</h1>
                        <p>@gmail.com</p>
                    </div>
                
                </div>
                <div className='contact  space-x-10 py-3'>
                    <div><MdOutlineLocalPhone size={40} className="text-amber-600"/></div>
                    <div>
                        <h1>our phone</h1>
                        <p>@gmail.com</p>
                    </div>
                
                </div>
            </div>
            <form action="#" className='px-10   space-y-5  '>
                <div className='grid gap-5 md:grid-cols-2 '>
                    <div className="input-parent ">
                        <input type="text" placeholder='Your Name' className='grow'/>
                        <CiUser className="text-amber-600"/>
                    </div>
                    <div className="input-parent">
                        <input type="text" placeholder='Email Address' className='grow'/>
                        <MdOutlineMail className="text-amber-600"/>
                    </div>
                
                    <div className="input-parent ">
                        <input type="text" placeholder='Last Name' className='grow'/>
                        <MdDriveFileRenameOutline className="text-amber-600" />
                    </div>
                
                    <div className="input-parent">
                        <input type="text" placeholder='Phone number' className='grow'/>
                        <MdOutlineLocalPhone className="text-amber-600" />
                    </div>


                </div>
            
                <div className=' relative py-5'>
                <textarea name="" id="" placeholder='message' className=''></textarea>
                <FiMessageCircle className="absolute top-10 right-5 text-amber-600"/>
                <button className='contact-btn btn'>send message</button>   
                </div>
                
            </form>
        </div>
    </section>
  )
}

export default Contact
