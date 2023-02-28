import React from 'react';
import { useParams } from "react-router-dom";
import Loader from '../components/Loader';
import useAxiosGet from '../hooks/useAxiosGet';

function Product() {
  const { id } = useParams();
  const url = `https://63fcb54d859df29986c2b6c5.mockapi.io/api/v1/products/${id}`
  
  let product = useAxiosGet(url)
  
  let content = null

  if (product.error) {
    content = <p>Not Found. Please refresh or try again</p>
  }
  
  if (product.loading) {
    content = <Loader></Loader>
  }

  if (product.data) {
    content =
      <div>
        <h1 className='text-2xl font-bold mb-3'>{product.data.name}</h1>
        <div>
          <img
            className='max-w-[360px] max-h-[270px]'
            src={product.data.image}
            alt={product.data.name}
          />
        </div>
        <p className='text-md mt-1 font-bold'>$ {product.data.price}</p>
        <p className='text-md'>{product.data.description}</p>
      </div>
  }
  
  return (
    <>
      {content}
    </>
  )
}

export default Product