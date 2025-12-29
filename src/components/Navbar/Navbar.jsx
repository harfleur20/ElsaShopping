import React from 'react'
import "./Navbar.css"

import logo from '../../assets/Frontend_Assets/logo_big.png'
import { LuShoppingCart } from "react-icons/lu";


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
      <img src={logo} alt="" />  
      </div>
      <div className="nav-menu">
        <ul>
          <li>Shop <hr /></li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
        </ul>
      </div>
      <div className="nav-login-cart">
        <button>Login</button>
      <LuShoppingCart className="icon_cart"/>
      <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
