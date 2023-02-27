import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <>
      <Router>  
        <Header />
        <div className='p-3'>
          <Routes> 
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact /> } />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
