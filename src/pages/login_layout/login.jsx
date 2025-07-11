

const login = () => {
  return (
        <form action="#" className='bg-white px-3 py-1 space-y-2' >
             <div className='space-y-2 '>
                 <label htmlFor="" className='grid'>Email ID :</label>
                 <input type="text" className='login-box '/>
             </div>
              <div className='space-y-2'>
                 <label htmlFor="" className='grid'>Password :</label>
                 <input type="text" className='login-box ' />
             </div>
             <p className='text-end text-sm text-blue-500'>Forgot password?</p>
             <button className='submit-btn'>Login</button>
                     
        </form>
  )
}

export default login
