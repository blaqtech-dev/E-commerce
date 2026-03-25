import axios from 'axios'




export const deleteProduct=async(loadCart,cartItem)=>{
   await axios.delete(`http://localhost:3000/api/cart-items/${cartItem.productId}`)
   await loadCart()
}

