import React from 'react'
import Stepper from '../componemts/Stepper/Stepper'
import ProductInfo from '../componemts/product info/ProductInfo'
import ProductDescription from '../componemts/Description/ProductDescription'
import SimilarProducts from '../componemts/similar products/SimilarProducts'

function ProductPage() {
  const stepper = [
    {id:1,pageName:'خانه',link:'/'},
    {id:2,pageName:'دسته بندی',link:''},
    {id:3,pageName:'جزئیات محصول',link:''},
  ]

  return (
    <>
        <Stepper stepper={stepper}/>
        <ProductInfo />
        <ProductDescription />
        <SimilarProducts />
    </>
  )
}

export default ProductPage
