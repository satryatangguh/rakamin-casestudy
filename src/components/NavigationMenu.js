import React from "react";
import { Link } from "react-router-dom"

function NavigationMenu(props) {
  return (
    <>
      <div className="font-bold text-lg py-3">
          Logo
      </div>
      <ul>
        <li>
          <Link
            to="/"
            className='text-blue-500 py-3 border-b border-t block'
            onClick={props.closeMenu}>Home</Link>
        </li>
        <li>
          <Link
            to="/about"
            className='text-blue-500 py-3 border-b block'
            onClick={props.closeMenu}>About</Link>
        </li>
        <li>
          <Link
            to="/contact"
            className='text-blue-500 py-3 border-b block'
            onClick={props.closeMenu}>Contact</Link>
        </li>
      </ul>
    </>
  )
}

export default NavigationMenu;