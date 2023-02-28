import React,{useState} from 'react'
import {Link} from 'react-router-dom'

const Signup = () => {

  const [validation, setvalidation] = useState({ name:"",email:"", password:"",cpassword:""});
  console.log(validation)
  
  
  const onChange=(event) => {
    let name = event.target.name;
    let value = event.target.value;

    setvalidation(() => {
      return{
        ...validation,
        [name] : value
      }
    })
  };
  const handleSubmit = async(e) =>
  {
    e.preventDefault();
    const {name,email, password,cpassword} = validation;
    const response = await fetch("/signup", 
    {
      method: "POST",
      headers: {
                  'Content-Type':'application/json'
      },
      body:JSON.stringify({name,email, password,cpassword})
    });
    const json = await response.json()
    console.log(json);
    
  }

  

  return (
    <div className="login-box">
    <div className="register">
  
    <h1>Register</h1>
    <input type="text" name="name" placeholder="Your Name" autocomplete="off" value={validation.name} onChange={onChange} id="name"></input>
    <input type="text" name="email" placeholder="Your Email" autocomplete="off" value={validation.email} onChange={onChange} id="email"></input>
    <input type="password" name="password"  placeholder="Your Password" autocomplete="off" value={validation.password} onChange={onChange} id="password"></input>
    <input type="password" name="cpassword" placeholder="Confirm Password" autocomplete="off" value={validation.cpassword} onChange={onChange} id="cpassword"></input>
    <button className="button" onClick={handleSubmit}>Register</button>
    <div>or</div>
    <div className="button" ><Link to="/Login">Login</Link></div>
</div>
</div>
  )
}
export default Signup;