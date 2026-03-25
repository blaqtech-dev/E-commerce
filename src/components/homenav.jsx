import { Link } from "react-router"
import '../css/mainhome.css'
import { useState } from 'react';
import { signOut } from "firebase/auth";
import { auth } from "../pages/login";
import { useNavigate } from "react-router";


export function  HomeNavBar(){
    const [show,setShow]=useState(false)

    const toggleBtn=()=>{
    setShow(!show)
}
const navigate=useNavigate()


const handleLogout = async () => {
  try {
    await signOut(auth);
    console.log("User logged out");
    navigate('/login')

  } catch (error) {
    console.log(error.message);
  }
};


return(
    <>
     
    <section className='coverall-homenav'>
<Link to='/home'>
<div className='left-homenav'>
<img src='/images/logoshop.png' alt='images'/>
<h3>e-shop</h3>
</div>
</Link>


<div className={`right-homenav ${show?'visible':'hiddden'}`}>
   
    <button className='signout' onClick={handleLogout}>signout</button>
   
    <Link to='/product'>
    <h4>product</h4>
    </Link>


   

    <Link to='/checkout'>
   <h4>checkout</h4> 
    </Link>

      <Link to='/orders'>
   <h4>order</h4> 
    </Link>
    
</div>
  <button onClick={toggleBtn} className='togglebtn'>
 {show?'hide':'show'}
    </button>
    </section>


</>

)
}