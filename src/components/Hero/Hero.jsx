import React from 'react'
import './Hero.css'


import hand_icon from '../../assets/Frontend_Assets/hand_icon.png'
import { FaArrowRight } from "react-icons/fa";
import hero_image from '../../assets/Frontend_Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>Nouvel Arrivage !</h2>
        <div>
            <div className="hand-hand-icon">
                <p>nouveauté</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>collections</p>
            <p>pour tous</p>
        </div>
        <div className="hero-latest-btn">
            <div>Dernière Collection</div>
            <FaArrowRight />
            
        </div>
      </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>
      
    </div>
  )
}

export default Hero
