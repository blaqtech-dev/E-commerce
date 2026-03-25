import {Link} from 'react-router'

import { useState } from 'react';
import {FaCartArrowDown} from 'react-icons/fa'
export function JustNavBar({cartItems}){
const [show,setShow]=useState(false)

let totalQuantity=0

cartItems.forEach((cartItem)=>{
    totalQuantity+=cartItem.quantity
})
 

const toggleBtn=()=>{
    setShow(!show)
}

    return(
 <section className='homepage-header'>
    < Link to='/home'>
    <div className='left-homenav'>
<img src='/images/logoshop.png' alt='images'/>
<h3>e-shop</h3>
</div>
      </Link>
    

   

        

<div className={`right-headerhome ${show?'visible':'hiddden'}`}>



<div>
        <Link  to='/home'>
       <h2> home </h2> 
        </Link>
        </div>

<div>
      <Link  to='/product'>
       <h2> product </h2> 
        </Link>
        </div>
     
   <Link to='/orders'>
      <div>
      <h2>orders</h2>
      </div>
   </Link>

 
     
     
         <Link to='/checkout'>
          <div className='transfer-cart'>
            
       <button><FaCartArrowDown className='fa-cart'/></button>
            <h3>{totalQuantity}</h3>
            
</div>
         </Link>
    
  
      
      </div>
  <button onClick={toggleBtn} className='togglebtn'>
    {show?'hide':'show'}
    </button>
    </section>
    )
 }