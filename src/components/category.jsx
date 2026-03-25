import { useState } from "react";
import { productsData } from "./majordata";
import '../css/category.css'
import {Link} from 'react-router'


const categories = ["all", "women", "men", "shoes",'accessories','kitchen'];

export function CategoryFilter(){
const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter logic
  const filteredProducts =
    selectedCategory === "all"
      ? productsData
      : productsData.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <div className='coverall-category'>
<div className='category-btn'>
      <h2>few of our products category</h2>

      {/* Buttons */}
      <div  >
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}>
            {cat.toUpperCase()}
          </button>
        ))}
      </div>
</div>
      {/* Product List */}
      <div className='category-products' >
        {filteredProducts.map((product) => (
          <div key={product.id} className='each-product'>
            <img src={product.images} alt='images'/>
            <h3>{product.name}</h3>
           <h4>${(product.price/100).toFixed(2)}</h4>
          </div>
        ))}
      </div>

     <div className='category-belowbtn'>
        <Link to='/product'>
        <button>checkout our product</button>
        </Link>
     </div>
    </div>
  );
}
