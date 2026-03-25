import React, { useState } from "react";
import { auth } from "./login.jsx";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import '../css/login.css'

export function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message,setMessage]=useState('')
const [showMe,setShowMe]=useState(false)


const navigate=useNavigate()
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      
      setMessage('Account created successfully!')
      setTimeout(()=>{
          setMessage('')
navigate('/login')
      },2000)

    } catch (error) {
      
      setMessage(error.message)
      setTimeout(()=>{
 setMessage('')
      },2000)
    }
  };

   const handleClick=(e)=>{
    e.preventDefault()
setShowMe(!showMe)
 }

  return (
    <section className='background'>


     <div className='design-general'>
    <form onSubmit={handleSignup}>
        <div className='upper-log'>
            <img src='/images/logoshop.png'/>
      <h2>E-Shop</h2>
    
      </div>
<div className='camp-login'>
    <p>
      <input
      className='special-input'
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
</p>
<p>

      <input
       type={showMe?'text':'password'}
        
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      </p>
      <button className='hide-show' onClick={handleClick}>{showMe?'hide':'show'} password </button>
</div>
<div className='login-btn'>
     <p className='create-signup'>
    <button type="submit">Sign Up</button>    
        </p> 


<p className='message'>{message}</p>


<p className='move-to'>
      <button>you have an account?</button>

  <Link to='/login'>
      <small>login</small>
      </Link>
       </p>
      </div>
     
    </form>
    </div>
        </section>
  );
}

