import { HomeNavBar } from "../components/homenav.jsx"
import '../css/homepage.css'
import {Slider} from '../components/swiper.jsx'
import { CategoryFilter } from "../components/category.jsx"
import { ContactMe } from "../components/contact.jsx"
export function MainHome(){
    return(
        <>
         <HomeNavBar/>
             <div>
           <Slider/>
           <CategoryFilter/>
           <ContactMe/>


        </div>
        </>
    
    )
}