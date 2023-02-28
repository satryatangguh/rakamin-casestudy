import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Contact from './pages/Contact';


function App() {
  return (
    <>
      <div className='relative pb-10 min-h-screen'>
        <Router>  
          <Header />
          <div className='p-3'>
            <Routes> 
              <Route exact path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/products/:id' element={<Product />} />
              <Route path='/contact' element={<Contact /> } />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
