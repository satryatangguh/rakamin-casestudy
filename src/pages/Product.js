import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

function Product() {
  const [product, setProduct] = useState(null)
  const { id } = useParams();

  let content = null


  useEffect(() => {
    axios.get(`https://63fcb54d859df29986c2b6c5.mockapi.io/api/v1/products/${id}`)
      .then(response => {
        setProduct(response.data)
      })
  }, [id])

  if (product) {
    content =
      <div>
        <h1 className='text-2xl font-bold mb-3'>{product.name}</h1>
        <div>
          <img
            className='w-[320px] h-[240px]'
            src={product.image}
            alt={product.name}
          />
        </div>
        <p className='text-md mt-1'>{product.description}</p>
      </div>
  }
  
  return (
    <>
      {content}
    </>
  )
}

export default Product