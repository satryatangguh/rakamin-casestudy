import React from 'react';
import {Link} from "react-router-dom"

function ProductCard(props) {
  return (
    <div className='border rounded-lg overflow-hidden'>
      <div>
        <img
          src={props.product.image}
          alt={props.product.name}
          className="bg-cover"
        />
      </div>
      <div className='p-3'>
        <h3 className='font-bold text-xl mb-3'>
          {props.product.name}
        </h3>
        <div className='font-bold mb-3'>
          $ {props.product.price}
        </div>
        <div className='mb-3'>
          {props.product.description}
        </div>
        <Link
          to={`/products/${props.product.id}`}
          className="bg-blue-500 text-white p-2 flex justify-center w-full"
        >
          View Detail
        </Link>
      </div>
    </div>
  )
}

export default ProductCard;