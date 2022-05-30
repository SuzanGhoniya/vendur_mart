import * as React from "react"
import '../component/layout.css'
import ProductImage from "../component/reuseable/ProductImage";


const Product = (data) => {
  console.log(data);
  return (
    <div>
        <ProductImage/>
    </div>
  )
}

export default Product
