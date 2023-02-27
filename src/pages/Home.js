import React from "react";
import HelloWorld from "../components/HelloWorld"

function Home() {
  return (
    <>
      <h1 className='font-bold text-2xl'>
        Home Page
      </h1>
      <HelloWorld name="Satrya" />
    </>
  )
}

export default Home;