
import {useState} from 'react'
import axios from 'axios'


export function EachProduct({product,loadCart}){

     const [quantity,setQuantity]=useState(1)

const apiReq='https://e-commerce-backend-aemd.onrender.com'

     const addToCart=async()=>{
await axios.post(`${apiReq}/api/cart-items`,{
productId:product.id,
quantity:quantity
})
await loadCart()



}



        const selectQuantity=(e)=>{
const selected=Number(e.target.value)
setQuantity(selected)
        }


  return(
 <div className='individual-product'>
    <div className='productshome-images'>

    <img src={product.image}/>
    </div>
    <div className='smallbody-content'>
        <h3>{product.name}</h3>
      

      <div className='just-product'>
        <h2>${(product.priceCents/100).toFixed(2)} </h2>
        <select value={quantity} onChange={selectQuantity}>
            <option  value='1'>1</option>
            <option  value='2'>2</option>
            <option  value='3'>3</option>
            <option  value='4'>4</option>

            <option  value='5'>5</option>
            <option  value='6'>6</option>
            <option  value='7'>7</option>
             <option  value='8'>8</option>
             <option  value='9'>9</option>
        </select>
    </div>
    <div className='addtocart-btn'>
<button onClick={addToCart}>add to cart</button>
    </div>
        
    </div>
</div>
)
}