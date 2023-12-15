import React from 'react'
import Stepper from '../componemts/Stepper/Stepper'
import ContactUs from '../componemts/Contact us/ContactUs'
import Container from '@mui/material/Container'

function ContactPage() {
    const stepper = [
        {id:1,pageName:'خانه',link:'/'},
        {id:2,pageName:'تماس با ما',link:''},
      ]
    
  return (
    <section>
        <Stepper stepper={stepper}/>
        <Container maxWidth="xl">
            <ContactUs />
        </Container>
    </section>
  )
}

export default ContactPage
