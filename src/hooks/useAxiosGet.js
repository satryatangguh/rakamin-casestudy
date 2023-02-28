import React, { useState, useEffect} from 'react'

function useAxiosGet() {
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
}

export default useAxiosGet;