
import './App.css'
import {Routes,Route} from 'react-router'
import  {HomePage} from './pages/homepage'
import { CheckOut } from './pages/checkout'
import { OrderPage } from './pages/orders'
import { MainHome } from './pages/mainhome'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {Signup} from './pages/mainlogin'
import {Login} from './pages/mainloginin'
import { ForgotPassword } from './pages/resetpassword'

function App(){
const [cartItems,setCartItems]=useState([])

  const loadCart=
  async()=>{
const res= await axios.get('http://localhost:3000/api/cart-items?expand=product')
setCartItems(res.data)

  }


useEffect(()=>{
// eslint-disable-next-line react-hooks/set-state-in-effect
loadCart()
},[])
 

return(
  <div>
    <Routes>
         <Route path='/' element={<Signup/>}/>
      <Route path='/home' element={<MainHome/>} cartItems={cartItems}/>
      <Route path='/product' element={<HomePage cartItems={cartItems} loadCart={loadCart}/>}></Route>
  
        <Route path='/checkout'
         element={<CheckOut cartItems={cartItems} loadCart={loadCart}/>}></Route>
    <Route path='/orders' element={<OrderPage  
     cartItems={cartItems}/>}></Route>
   <Route path='/login' element={<Login/>}/>
   
   <Route path='/forget' element={<ForgotPassword/>}/>
    </Routes>

  </div>
)
    }

export default App
