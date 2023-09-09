import React from 'react'
import Container from '@mui/material/Container'
import Stepper from '../componemts/Stepper/Stepper'
import UserBasketProducts from '../componemts/UserBasketProducts/UserBasketProducts'
function UserBasketPage() {
    const stepper = [
        {id:1,pageName:'خانه',link:'/'},
        {id:2,pageName:'سبد خرید',link:'/userbasket'},
      ]
    
  return (
    <section>
      <Stepper stepper={stepper}/>
      <Container maxWidth="xl">
        <UserBasketProducts /> 
      </Container>
    </section>
  )
}

export default UserBasketPage
