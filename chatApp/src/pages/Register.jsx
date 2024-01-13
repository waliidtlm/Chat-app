import React from 'react'
import "../styles/RegisterLogin.css"
import { FcAddImage } from "react-icons/fc";



function Register() {
  return (
<div className='register-page'>
<div className="container">
<div className="banner">
  <img src="" alt="" />
</div>
  <form action="" className='form'>
    <h1>Create Account</h1>
    <input type="text" placeholder='Username' />
    <input type="email" placeholder='Email' />
    <input type="password" placeholder='Password' />
    <input style={{display:"none"}} type="file" id='avatar'/>
    <label htmlFor="avatar">
    <FcAddImage size={50}/> Add Avatar
    
    </label>
    <button>Sign Up</button>
    <p>You have an account ? Login Here </p>
  </form>
</div>

</div>
    
  )
}

export default Register
