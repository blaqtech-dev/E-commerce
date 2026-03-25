 import '../css/homepage.css'
import {JustNavBar} from '../components/navbar'
import axios from 'axios'
import { EachProduct } from './eachproduct'
import { useEffect,useState } from 'react'


 
 export function HomePage({cartItems,loadCart}){
    const [products,setProducts]=useState([])
const apiReq='https://e-commerce-backend-aemd.onrender.com'
    

    useEffect(()=>{
        const getHomeData=async()=>{
const res= await axios.get(`${apiReq}/api/products`)

   setProducts(res.data)

        }

getHomeData()

},[])


return(
    <>
    
   <JustNavBar cartItems={cartItems} />


    <section className='main-bodyhome'>
        <div className='coverall-product'>
{
products.map((product)=>{
     
  
return(
<EachProduct key={product.id}
 product={product} loadCart={loadCart}/>
)
})

}
</div>
    </section>
    </>
)
}