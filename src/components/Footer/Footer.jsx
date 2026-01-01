import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/Frontend_Assets/logo_big.png'

import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
        </div>
        <ul className="footer-links">
            <li>les plus vendues</li>
            <li>Produits</li>
            <li>A propos</li>
            <li>Contact</li>
            <li>FAQ</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <AiFillTikTok  className='fa-icons' />
            </div>
            <div className="footer-icons-container">
                <RiInstagramFill className='fa-icons'/>
            </div>
            <div className="footer-icons-container">
                <FaFacebookSquare  className='fa-icons' />
            </div>
        </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright@2025 - All right Reserved</p>
            </div>
    </div>
            
  )
}

export default Footer
