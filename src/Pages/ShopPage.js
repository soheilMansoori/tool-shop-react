import React from 'react'
import Stepper from '../componemts/Stepper/Stepper'
import AllProducts from '../componemts/AllProducts/AllProducts'

function ShopPage() {
  const stepper = [
    {id:1,pageName:'خانه',link:'/'},
    {id:2,pageName:'دسته بندی',link:''},
    {id:3,pageName:'فروشگاه',link:'/shop'},
  ]
  return (
    <>
      <Stepper stepper={stepper}/>
      <AllProducts />
    </>
  )
}

export default ShopPage
