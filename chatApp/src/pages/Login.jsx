import React from 'react'
import "../styles/RegisterLogin.css"
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"



function Login() {
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
      navigate("/")
    } catch (error) {
      console.error(error.message, "Something went wrong");
    }
  };
  return (
    <div className='register-page'>
    <div className="container">
    <div className="banner">
      
    </div>
      <form action="" className='form' onSubmit={handleSubmit}>
        <h1>Get To Your Account</h1>
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Password' />
        
        <button className='sign'>Sign in</button>
        <p>You don't have an account ? Register <Link to="/register">Here</Link>  </p>
      </form>
    </div>

  </div>
  )
}

export default Login