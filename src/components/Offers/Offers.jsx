import React from 'react'
import './Offers.css'
import exclusiveImage from "../../assets/Frontend_Assets/exclusive_image.png"

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Offre</h1>
        <h1>Exclusive pour toi</h1>
        <p>Uniquement les meilleurs produits vendus</p>
        <button>En savoir plus</button>
      </div>
      <div className="offers-right">
        <img src={exclusiveImage} alt="" />
      </div>
    </div>
  )
}

export default Offers
