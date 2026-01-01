import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'
import NewCollections from '../components/NewCollections/NewCollections'
import NewsLeter from '../components/NewsLetter/NewsLeter'
import Footer from '../components/Footer/Footer'


const Shop = () => {
  return (
    <div>
     <Hero />
     <Popular />
     <Offers />
     <NewCollections />
     <NewsLeter />
    </div>
  )
}

export default Shop
