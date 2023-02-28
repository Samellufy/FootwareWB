import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

export default function Login() {
  return (
   
<div className="login-box">
<Header></Header>
    <div className="login">
      <h1>Login</h1>
      <input type="text" name="email" placeholder="Enter your Email"></input>
      <input type="password" name="password" placeholder="Enter your Password" ></input>
      <div className="button" >Login</div>
      <div>or</div>
      <div className="button" ><Link to="/Signup">Register</Link></div>
    </div>
    </div>

  )
}
