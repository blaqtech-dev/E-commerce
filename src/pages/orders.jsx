import '../css/order.css'
import axios from 'axios'
import {useState,useEffect} from 'react'
import dayjs from 'dayjs'

import {JustNavBar} from '../components/navbar'
import { useNavigate } from 'react-router'

export function OrderPage({cartItems}){
     const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false)
const [orders,setOrders]=useState([])
const navigate=useNavigate()

 const apiReq='https://e-commerce-backend-aemd.onrender.com'

  const handlePayment = () => {
    setLoading(true);
    setStatus("Processing payment...");

    setTimeout(() => {
      setLoading(false);
      setStatus("✅ Payment Successful!");
    }, 2000);

    setTimeout(()=>{
        setLoading(false);
      setStatus("");
      navigate('/home')
    },4000)

  };

useEffect(()=>{

    const getOrderData=async()=>{
const res=await axios.get(`${apiReq}api/orders?expand=products`)

setOrders(res.data)

    }
getOrderData()

},[])


    return(
        <>
        <JustNavBar cartItems={cartItems}/>

        <section className='coverbody-order'>
            <h1 className='order-header'>your orders</h1>

            <div className='coverwhole-order'>
{
    orders.map((order)=>{
return(
 <div className='mainbody-orders'>
                <div className='upperbody-orders'>
<div className='upperleft-orders'>
    <div >
<h2>order placed</h2>
 <p>{dayjs(order.orderTimesMs).format('MMMM D')}</p>
    </div>
<div>
    <h2>total</h2>
    <p>{(order.totalCostCents/100).toFixed(2)}</p>
</div>
</div>
<div className='upperright-orders'>
     <div>
<h2>order ID</h2>
<p>{order.id}</p>
    </div>
</div>
                </div>


                  
                  
                   

                    {
        order.products.map((orderProduct)=>{
return(
        <div className='lowerbody-orders' key={orderProduct.product.id}>
                    <div className='lowerleft-orders'>
    <div className='orders-image' >                   
<img src={orderProduct.product.image}/>
</div>
<div className='content-lowerleft'>
    <h2>{orderProduct.product.name}</h2>
    <h3>arriving on:{dayjs(orderProduct.estimatedDeliveryTimeMs).format('MMMM D')}</h3>
    <h4>quantity:{orderProduct.quantity}</h4>
    
</div>
                    </div>


               </div>
)
                        })
                    }
                   
                <div className='pay-money'>
    <button onClick={handlePayment}>
        
  {loading ? "Processing..." : `pay ${(order.totalCostCents/100).toFixed(2)}`}

    </button>
     <p>{status}</p>
  
</div>
            </div>
)
    })
}
  

            </div>

         
        </section>
        </>
    )
}