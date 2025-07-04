

const Form = () => {
  return (
  <form action="#" className='bg-white px-3 py-2 space-y-2 grid  '>
                            <label htmlFor="">Name</label>
                            <input type="text" className='login-box '/>
                            <label htmlFor="">Mobile No</label>
                           <input type="text" className='login-box'/>
                            <label htmlFor="">Email ID</label>
                            <input type="text" className='login-box'/>
                            <label htmlFor="">Password</label>
                            <input type="text" className='login-box'/>
                        <button className='submit-btn'>Register</button>
                    </form>
  )
}

export default Form
