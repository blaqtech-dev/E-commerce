 import '../css/homepage.css'
 
 
 export function HomePage(){
return(
    <>
    
    <section className='homepage-header'>
      <div className='left-headerhome'>
simpleEcommerce
      </div>
       <div className='middle-headerhome'>

        <div>
<input type='text' placeholder='search product'   className='input'/>
        </div>

        <div>
            <button> click me</button>
        </div>
      </div>  

       <div className='right-headerhome'>
   
        <h3>orders</h3>
         <h4>0</h4>
         <small>cart</small>
      
      </div>

    </section>


    <section className='main-bodyhome'>
<div className='individual-product'>
    <img src='images/cap6.jpeg'/>
    <div className='smallbody-content'>
        <h3>best cap in town</h3>
        <h3>price:20$</h3>
        <button>add to cart</button>
    </div>
</div>

<div className='individual-product'>
    <img src='images/head3.jpeg'/>
    <div className='smallbody-content'>
        <h3>best headset in town</h3>
        <h3>price:30$</h3>
        <button>add to cart</button>
    </div>
</div>

    <div className='individual-product'>
    <img src='images/tv2.jpeg'/>
    <div className='smallbody-content'>
        <h3>best tv in town</h3>
        <h3>price:40$</h3>
        <button>add to cart</button>
    </div>
</div>

    </section>
    </>
)
}