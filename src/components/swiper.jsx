
import '../css/swiper.css'
import {Link} from 'react-router'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
export function Slider(){
  return (

    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
   
      pagination={{ clickable: true }}
      autoplay={{ delay: 10000 }}
      
    >
     


      <SwiperSlide>
        <div className='slider-main'>
            <div>
     <img src="/images/products/2-slot-toaster-white.jpg" alt="slide1" />
     </div>
    <div className='slider-content'>
    <h1><small>welcome</small> to e-shop website</h1>
        <h2>get a discount of 40% for your first products  order</h2>
    <p>You are welcome to the best shop
        online! E-shop offer quality and quantity of any products you 
        are looking for, We offer all varieties of product like clothes
        ,wears,kitchen utensils and so on 
        </p>
        <Link to='/product'>
        <button>shop now</button>
        </Link>
        </div>
        </div>
    </SwiperSlide>

      <SwiperSlide>
        <div className='slider-main'>
            <div>
          <img src="images/products/men-athletic-shoes-white.jpg" alt="slide2" />
          </div>
    <div  className='slider-content'>
    <h1><small>welcome</small> to e-shop website</h1>
        <h2>get a discount of 40% for your first products  order</h2>
    <p>You are welcome to the best shop
        online! E-shop offer quality and quantity of any products you 
        are looking for, We offer all varieties of product like clothes
        ,wears,kitchen utensils and so on 
        </p>
        <Link to='/product'>
        <button>shop now</button>
        </Link>
        </div>
        </div>
    </SwiperSlide>

      <SwiperSlide>
         <div  className='slider-main'>
            <div>
    <img src="images/products/vanity-mirror-pink.jpg" alt="slide3" />
    </div>
    <div className='slider-content'>
     <h1><small>welcome</small> to e-shop website</h1>
        <h2>get a discount of 40% for your first products  order</h2>
    <p>You are welcome to the best shop
        online! E-shop offer quality and quantity of any products you 
        are looking for, We offer all varieties of product like clothes
        ,wears,kitchen utensils and so on 
        </p>
        <Link to='/product'>
        <button>shop now</button>
        </Link>
        </div>
        </div>
    </SwiperSlide>
 
   

</Swiper>

       
   



  
  );
};

