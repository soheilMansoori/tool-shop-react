import React from 'react'
import Container from '@mui/material/Container'
import Stepper from '../componemts/Stepper/Stepper'
import UserBasketProducts from '../componemts/UserBasketProducts'
function UserBasketPage() {
    const stepper = [
        {id:1,pageName:'خانه',link:'/'},
        {id:2,pageName:'سبد خرید',link:'/userbasket'},
      ]
    
  return (
    <section>
      <Container maxWidth="xl">
        <Stepper stepper={stepper}/>
        <UserBasketProducts /> 
      </Container>
    </section>
  )
}

export default UserBasketPage
