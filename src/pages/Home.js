import React, { useState, useEffect } from "react";
import axios from 'axios';
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState({
    loading: false,
    data: null,
    error: false
  })
  
  useEffect(() => {
    setProducts({
      loading: true,
      data: null,
      error: false
    })
    axios.get("https://63fcb54d859df29986c2b6c5.mockapi.io/api/v1/products?page=1&limit=10")
      .then(response => {
        setProducts({
          loading: false,
          data: response.data,
          error: false
        })
      }).catch(error => {
        setProducts({
          loading: false,
          data: null,
          error: true
        })
      })
  }, [])

  let content = null
  
  if (products.error) {
    content = <p>Not Found. Please refresh or try again</p>
  }
  
  if (products.loading) {
    content = <Loader></Loader>
  }

  if (products.data) {
    content =
      products.data.map((product) => 
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      )
  }

  return (
    <>
      <h1 className='font-bold text-2xl mb-3'>
        Best Seller
      </h1>
      {content}
    </>
  )
}

export default Home;