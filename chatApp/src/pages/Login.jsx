import React from 'react'
import "../styles/RegisterLogin.css"

function Login() {
  return (
    <div className='register-page'>
    <div className="container">
    <div className="banner">
      
    </div>
      <form action="" className='form'>
        <h1>Get To Your Account</h1>
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Password' />
        
        <button>Sign in</button>
        <p>You don't have an account ? Register Here </p>
      </form>
    </div>

  </div>
  )
}

export default Login