import React from 'react'
import './NewsLetter.css'

const NewsLeter = () => {
  return (
    <div className='newsletter'>
        <h1>Obtiens des offres exclusives sur ton Email</h1>
        <p>Souscris à la newletter et reste informé sur nos offres futures</p>
        <div>
           <input type="email" placeholder='veuillez entrer votre email ici..'/>
           <button>Souscrire</button> 
        </div>
    </div>
  )
}

export default NewsLeter
