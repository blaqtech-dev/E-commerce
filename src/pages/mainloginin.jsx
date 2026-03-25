import React, { useState } from "react";
import { auth } from "./login.jsx";
import { signInWithEmailAndPassword } from "firebase/auth";
import '../css/login.css'
import { Link } from "react-router";
import { useNavigate } from "react-router";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const [message,setMessage]=useState('')
const [showMe,setShowMe]=useState(false)


const navigate=useNavigate()
  const handleLogin = async (e) => {
   
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      
        setMessage('Login successful!')
        
   setTimeout(()=>{
setMessage('')
navigate('/home')
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

   
    <form onSubmit={handleLogin}>
      <div className='upper-log'>
            <img src='/images/logoshop.png'/>
      <h2>E-Shop</h2>
    
      </div>
<div className='camp-login'>
    <p>
      <input
        type="email"
          className='special-input'
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


  

    

      <div className='forget-password'>
 <Link to='/forget'><small>
        forgot password?
        </small></Link>
       </div>

<button className='hide-show' onClick={handleClick}>{showMe?'hide':'show'} password </button>

      </div>
     

<div className='login-btn'>
      <p className='create-signup'>
      <button type="submit">Login</button>
      </p>
<p className='message'>{message}</p>

      <p className='move-to'>
      <button> you don"t have an account  </button>
        <Link to='/'>
     <small>create an account</small>
      </Link>
        
     
      </p>
      </div>
     
    </form>
     </div>
        </section>
  );
}

