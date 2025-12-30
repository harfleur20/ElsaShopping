import React, { useState } from 'react'
import "./Navbar.css"

import logo from '../../assets/Frontend_Assets/logo_big.png'
import { LuShoppingCart } from "react-icons/lu";
import { Link } from 'react-router-dom';


const Navbar = () => {

  const [menu, setMenu] = useState("shop")

  return (
    <div className='navbar'>
      <div className="nav-logo">
      <img src={logo} alt="" />  
      </div>
      <div className="nav-menu">
        <ul>
          <li onClick={()=>setMenu("shop")}><Link to='/'>Boutique</Link>{menu==="shop"?<hr/>:<></>}</li>
          <li onClick={()=>setMenu("mens")}><Link to='/hommes'>Hommes</Link>{menu==="mens"?<hr/>:<></>}</li>
          <li onClick={()=>setMenu("womens")}><Link to='/femmes'>Femmes</Link>{menu==="womens"?<hr/>:<></>}</li>
          <li onClick={()=>setMenu("kids")}><Link to='/enfants'>Enfants</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
      </div>
      <div className="nav-login-cart">
        <Link to='/login'><button>connexion</button></Link>
      <Link to='/cart'><LuShoppingCart className="icon_cart"/></Link>
      <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
