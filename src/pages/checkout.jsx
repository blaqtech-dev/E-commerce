import '../css/checkout.css'
import axios from 'axios'
import {Link} from 'react-router'
import {useState,useEffect,useRef} from 'react'
import dayjs from 'dayjs'
import { deleteProduct } from '../components/deletebtn'
import { useNavigate } from 'react-router'
import { FaBars} from "react-icons/fa";

export function CheckOut({cartItems,loadCart}){
   const  [deliveryOption,setDeliveryOption]=useState([])
   const [payment,setPayment]=useState(null)
const navigate=useNavigate()
 const paymentRef = useRef(null);
 const orderRef=useRef(null)
 const [show,setShow]=useState(false)

 const apiReq='https://e-commerce-backend-aemd.onrender.com'

   const goToSection = () => {
    paymentRef.current.scrollIntoView({ behavior: "smooth" });
  };
    const moveToOder = () => {
    orderRef.current.scrollIntoView({ behavior: "smooth" });
  };




const orderSection=async()=>{
    await axios.post(`${apiReq}/api/orders`)
    await loadCart();
navigate('/orders')
}



   useEffect(()=>{
    const getDeliveryData=async()=>{
 const res=await axios.get(`${apiReq}/api/delivery-options?expand=estimatedDeliveryTime`)
    
setDeliveryOption(res.data)
   
    }
    getDeliveryData()
  

    const getPaymentData=async()=>{
 const res=await axios.get(`${apiReq}/api/payment-summary`)
  
setPayment(res.data)

    }
    getPaymentData()
   
   },[cartItems])

  
   let totalQuantity=0
cartItems.forEach((cartItem)=>{
totalQuantity+=cartItem.quantity
})


const toggleBtn=()=>{
    setShow(!show)
}

    return(
        <main className='coverall-checkout'>




        <section className='checkout-nav'>

<Link to='/home'>
<div className='left-homenav'>
 <img src='/images/logoshop.png' alt='images'/>
<h3>e-shop</h3>
  </div>
  </Link>

       <div className='middle-headercheckout'>

   
    <h3>{totalQuantity} </h3>
   <h4>items</h4>
        </div>

       
      
     
         <div className={`coverall-checkoutheader ${show?'visible':'hiddden'}`}>
              <Link to='/home'>
             <div className='right-headercheckout'>
                <h3> home</h3>
                </div>
            </Link>

            <Link to='/product'>
             <div className='right-headercheckout'>
                <h3>product</h3>
                </div>
            </Link>



              <Link to='/orders'>
             <div className='right-headercheckout'>
                <h3> order</h3>
                </div>
            </Link>

   </div>
      
<button onClick={toggleBtn} className='togglebtn'>
   {show?'hide':'show'}
    </button>
    

        </section>



 <button onClick={goToSection} className='paymentMove'>
        Go to payment section
      </button>
        <section className='checkout-mainbody' ref={orderRef}>
            <h1 className='review'>review your order</h1>

            <div className='cover-theboth'>
 
<div className='product-checkoutarea'>



{
   deliveryOption.length>0 && cartItems.map((cartItem)=>{
       
     const selectedDelivery=deliveryOption.find((deliveryMe)=>{
return deliveryMe.id===cartItem.deliveryOptionId
     })





return(
<div className='individual-checkoutarea' key={cartItem.productId}>
    <h2 className='deliver-check'>delivery date: {dayjs(selectedDelivery.estimatedDeliveryTimeMs).format('dddd, MMMM D')}</h2>
    <div className='cover-innercheckout'>
<div className='left-innercheckout'>
    <img src={cartItem.product.image}/>
    <div className='left-contentcheckout'>
        <h1>{cartItem.product.name}</h1>
        <h3>${(cartItem.product.priceCents/100).toFixed(2)}</h3>
        <div className='short-leftfigure'>
  <h4>quantity:</h4>
  <h5>{cartItem.quantity}</h5>

 
        </div>
       <button onClick={()=>deleteProduct(loadCart,cartItem)}>delete</button>
    </div>
</div>

<div className='right-innercheckout'>
    <h4 className='choose-option'>choose your delivery option:</h4>


{deliveryOption.map((delivery)=>{

let priceString='free shipping'

if (delivery.priceCents > 0){
    priceString=`${(delivery.priceCents/100).toFixed(2)} - shipping`
}

const updateDeliveryOption=async()=>{
  await  axios.put(`${apiReq}/api/cart-items/${cartItem.productId}`,{
        deliveryOptionId:delivery.id
    })

await loadCart()
}

return(
 <div className='content-innercheckout' key={delivery.id}>
        
        <div className='option-checkout' onClick={updateDeliveryOption} >
            <input type='radio' onChange={()=>{}}
            checked={delivery.id===cartItem.deliveryOptionId}
             name={`delivery-option-${cartItem.productId}`}/>
            <div className='inner-optionship'>
                <h3>{dayjs(delivery.estimatedDeliveryTimeMs).format('dddd,MMMM D')}</h3>
                <h4>{priceString}</h4>
            </div>
        </div>
      
      
    </div>
)
    })}
 
</div>
    </div>
</div>

)
    })
}



</div>


               <div className='price-checkoutarea' ref={paymentRef}>
<h1 className='paymentH1'>payment summary</h1>

{
    payment &&(
<div className='coverall-payment' key={payment.id}>
    <div className='individual-payment'>
        <h3>items<span>({payment.totalItems})</span></h3>
        <p>{(payment.productCostCents/100).toFixed(2)}</p>
    </div>
     <div className='individual-payment shipping-area'>
        <h3>shipping & handling</h3>
         <p>{(payment.shippingCostCents/100).toFixed(2)}</p>
           </div>
         <div className='individual-payment'>
        <h3>total before tax:</h3>
     <p>{(payment.totalCostBeforeTaxCents/100).toFixed(2)}</p>
    </div>
     <div className='individual-payment shipping-area'>
        <h3>estimated tax(10%)</h3>
       <p>{(payment.taxCents/100).toFixed(2)}</p>
    </div>
  <div className='individual-payment'>
        <h3>order total</h3>
       <p>{(payment.totalCostCents/100).toFixed(2)}</p>
    </div>
    <div className='btn-checkpayment'>
    <button onClick={orderSection}> place your order</button>
    </div>
</div>
    )
}

</div>

</div>
<button className='ordermove' onClick={moveToOder}>move to order</button>
        </section>
        </main>
    )
}