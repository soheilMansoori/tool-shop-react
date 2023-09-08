import React, { useState } from 'react'
import ProductCard from '../cards/ProductCard'
import { Pagination } from '@mui/material'
import allProducts from '../../dataBase/allProducts'

function ProductBoxs() {
  const [page,setPage] = useState(1)
    const AllPprdoucts = allProducts
  
    const clickHandeler = (event) => {
      // console.log(event.target.innerText)
      if(event.target.innerText) {
        setPage(event.target.innerText)
      }
    }


  return (
<div className="col-span-12 lg:col-span-9 order-2">
    <div className='grid grid-cols-12 gap-4'>
    {/* products */}
      {AllPprdoucts.map(product=>(
        <div key={product.id} className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3'>
          <ProductCard {...product}/>
        </div>
        ))}
    </div>
    
    {/* Pagination */}
    <div className='col-span-12 flex justify-center my-10' dir='ltr'>
        <Pagination count={11} defaultPage={page} siblingCount={1} size='large' onClick={(event)=>clickHandeler(event)}/>
    </div>

</div>
  )
}

export default ProductBoxs
