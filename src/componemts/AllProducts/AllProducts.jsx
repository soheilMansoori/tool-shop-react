import React from 'react'
import Container from '@mui/material/Container'
import Aside from '../Aside/Aside'
import ProductBoxs from '../ProductsBoxs/ProductBoxs'

function AllProducts() {
  return (
    <section>
        <Container maxWidth="xl">
            <div className="grid grid-cols-12 gap-4">
                {/* fliters */}
                <Aside />                  
                {/* products boxs and Pagination*/}
                <ProductBoxs />  
            </div>
        </Container>
    </section>
    )
}

export default AllProducts

