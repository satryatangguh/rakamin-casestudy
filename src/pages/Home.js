import React from "react";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import useAxiosGet from "../hooks/useAxiosGet";

function Home() {
  const url = "https://63fcb54d859df29986c2b6c5.mockapi.io/api/v1/products?page=1&limit=12"

  let products = useAxiosGet(url)

  let content = null
  
  if (products.error) {
    content = <p>Not Found. Please refresh or try again</p>
  }
  
  if (products.loading) {
    content = <Loader></Loader>
  }

  if (products.data) {
    content =
      <div className="container-fluid">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.data.map((product) =>
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          )}
        </div>
      </div>
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