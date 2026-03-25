import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./login.jsx";
import { Link } from "react-router";
import  '../css/login.css'
import { useNavigate } from "react-router";

 export function ForgotPassword() {
  const [email, setEmail] = useState("");
const [message,setMessage]=useState('')

const navigate=useNavigate()
  const handleReset = async (e) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(auth, email, {
  url: "http://localhost:5173/login"
});
      
setMessage('Password reset email sent!')
setTimeout(()=>{
setMessage('')
},2000)
      navigate('/login')

    } catch (error) {
     
      setMessage(error.message)
      setTimeout(()=>{
setMessage('')
},2000)
    }
  };

  return (
    <section className='background'>
           <div className='design-general'>
    <form onSubmit={handleReset}>
  <div className='upper-log'>
            <img src='/images/logoshop.png'/>
      <h2>E-Shop</h2>
    
      </div>
<p className='reset-input'>
      <input
        type="email"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
</p>
<p>{message}</p>
<p className='reset-btn'>
<button type="submit">Reset Password</button>
</p>
      
     
     
    </form>
    </div>
    </section>
  );
}

