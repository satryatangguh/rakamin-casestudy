import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Loader from '../components/Loader';

function Product() {
  const [product, setProduct] = useState({
    loading: false,
    data: null,
    error: false
  })
  const { id } = useParams();

  let content = null


  useEffect(() => {
    setProduct({
      loading: true,
      data: null,
      error: false
    })
    axios.get(`https://63fcb54d859df29986c2b6c5.mockapi.io/api/v1/products/${id}`)
      .then(response => {
        setProduct({
          loading: false,
          data: response.data,
          error: false
        })
      }).catch(error => {
        setProduct({
          loading: false,
          data: null,
          error: true
        })
      })
  }, [id])

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
        <p className='text-md mt-1'>{product.data.description}</p>
      </div>
  }
  
  return (
    <>
      {content}
    </>
  )
}

export default Product