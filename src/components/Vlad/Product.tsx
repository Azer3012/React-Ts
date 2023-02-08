import React, { useState } from 'react'
import { IProduct } from './model'

interface ProductProps{
    product:IProduct
}

const Product = ({product}:ProductProps) => {
    const [details,setDetails]=useState(false)
  return (
    <div>
      <h3>
      {product.title}
      </h3>
      <img style={{width:'150px',height:"150px"}} src={product.image} alt={product.image} />
      <button onClick={()=>setDetails(!details)}>{details?"Hide":"Show"} details</button>
      {details && <p>{product.description}</p>}
    </div>
  )
}

export default Product