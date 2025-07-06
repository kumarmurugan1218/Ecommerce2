
import { useState } from 'react'
import Loginform from './login'
import Form from './Register'

const LogInPage = () => {
    const[Login,setLogIn]=useState(false);
  return (
    <section className=' h-screen flex justify-center items-center '>
            <div className='w-[700px] py-3 md:px-10 shadow-md space-y-2 md:w-1/2  '>
                <div className='flex justify-around  items-center'>
                    <button onClick={()=>{
                        setLogIn(true)
                    }} className='links text-2xl font-bold'>Login</button>
                    <button onClick={()=>{
                        setLogIn(false)
                    } } className='links text-2xl font-bold'> register</button>
                </div>
                <h1 className='text-center text-sm'>continue with</h1>
                <div className='flex justify-around gap-x-5'>
                    <button className=' google-btn'>google</button>
                    <button className=' fb-btn'>facebook</button>
                </div>

           
                    
                {Login ?
                    <Loginform/>
                                :

                    <Form/>}   
            </div>
       
    </section>
  )
}

export default LogInPage
