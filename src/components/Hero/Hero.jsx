import React from 'react'
import './Hero.css'



import { FaArrowRight } from "react-icons/fa";
import hero_image from '../../assets/Frontend_Assets/hero_image.png'
import { MdFiberNew } from "react-icons/md";



const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>Nouvel Arrivage !</h2>
        <div>
            <div className="hero-hand-icon">
                <p>nouvelles</p>
                <MdFiberNew className='new-hand'/>
            </div>
            <p>collections</p>
            <p>pour tous</p>
        </div>
        <div className="hero-latest-btn">
           <div className="one">
             <div>Dernière Collection</div>
            <FaArrowRight />
           </div>
           
            
        </div>
      </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>
      
    </div>
  )
}

export default Hero
