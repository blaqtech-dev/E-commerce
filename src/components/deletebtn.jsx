import axios from 'axios'

const apiReq='https://e-commerce-backend-aemd.onrender.com'


export const deleteProduct=async(loadCart,cartItem)=>{
   await axios.delete(`${apiReq}api/cart-items/${cartItem.productId}`)
   await loadCart()
}

