import React from 'react'
import Offer from '../componemts/Amazing offer/Offer'
import Category from '../componemts/Category/Category'
import Slider from '../componemts/slider/Slider'
import BestSellingProducts from '../componemts/Best selling products/BestSellingProducts'
function HomePage() {
  return (
  <>
  <Slider />
  <Category />
  <Offer />
  <BestSellingProducts />
  </>      
  )
}

export default HomePage
