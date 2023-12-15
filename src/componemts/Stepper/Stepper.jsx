import React from 'react'
import Container from '@mui/material/Container'
import { Breadcrumbs } from '@mui/material'
import { Link } from 'react-router-dom'

function Stepper({ stepper }) {
  return (
    <section className='mt-4'>
      <Container maxWidth="xl">
        <div className="bg-white p-4 rounded-3xl mb-4">
          <Breadcrumbs>
            {stepper && stepper.map(stepper => (
              <Link to={stepper.link} key={stepper.id} className='lg:p-4 hover:underline'>
                {stepper.pageName}
              </Link>
            ))}
          </Breadcrumbs>
        </div>
      </Container>
    </section>
  )
}

export default Stepper
