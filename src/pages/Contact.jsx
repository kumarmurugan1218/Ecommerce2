import { CgMail  } from "react-icons/cg";
import { MdOutlineLocalPhone,MdOutlineMail,MdDriveFileRenameOutline } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { FiMessageCircle } from "react-icons/fi";
const Contact = () => {
  return (
    <section className=' py-5'>
        <h1 className='heading mb-10'>our Contact </h1>
        <div className="flex flex-col mx-auto  shadow-2xl  rounded-xl  justify-center space-y-5  py-5 px-5  items-center    md:w-[900px]  ">
            <div className='flex flex-col gap-y-5 justify-center  items-center md:space-x-10 md:flex-row '>
                <div className='flex gap-5 border px-15  md:space-x-10 py-3 md:w-1/2 md:px-5'>
                     <div>
                    { <CgMail size={40} className="text-amber-600"/> }
                    </div>
                    <div>
                        <h1>our phone</h1>
                        <p>@gmail.com</p>
                    </div>
                </div>

                <div className='flex  gap-5 border px-15  md:space-x-10 py-3 md:w-1/2  md:px-5 '>
                    <div>
                        <MdOutlineLocalPhone size={40} className="text-amber-600"/>
                    </div>
                    <div>
                        <h1>our phone</h1>
                        <p>@gmail.com</p>
                    </div>
                </div>

            </div>
            <form action="#" className='  '>
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
