
import { useState } from 'react'
import Loginform from './login'
import Form from './Register'

const LogInPage = () => {
    const[Login,setLogIn]=useState(false);
  return (
    <section className='min-h-screen w-full flex items-center  '>
        <div className=' w-full mx-auto py-10  rounded-xl shadow-xl md:w-[50%] md:my-5'>
            <div className=' md:px-10 space-y-2   '>
                <div className='flex justify-around  items-center'>
                    <button onClick={()=>{
                        setLogIn(true)
                    }} className='links text-2xl font-bold'>Login</button>
                    <button onClick={()=>{
                        setLogIn(false)
                    } } className='links text-2xl font-bold'> register</button>
                </div>
                <h1 className='text-center text-sm'>continue with</h1>
                <div className='flex flex-col gap-y-5 justify-around gap-x-5 md:flex-row'>
                    <button className='google-btn'>google</button>
                    <button className='fb-btn'>facebook</button>
                </div>

           
                    
                {Login ?
                    <Loginform/>
                                :

                    <Form/>}   
            </div>
       </div>
    </section>
  )
}

export default LogInPage
