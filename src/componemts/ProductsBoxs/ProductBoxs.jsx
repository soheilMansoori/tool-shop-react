import React, { useState } from 'react'
import ProductCard from '../cards/ProductCard'
import { Pagination } from '@mui/material'

function ProductBoxs() {
  const [page,setPage] = useState(1)
    const AllPprdoucts = [
        {id:1,name:'کیف کمری ابزار',newPrice:'40000',prevPrice:'50000',img:'./imgs/products/new products/product-1.jpg',link:''},
        {id:2,name:'دریل شارژی دیوالت',newPrice:'40000',prevPrice:'50000',img:'./imgs/products/new products/product-2.jpg',link:'' , colors : ['#EF4444','#EAB308']},
        {id:3,name:'دستگاه مدل ingco',newPrice:'40000',prevPrice:'50000',img:'./imgs/products/new products/product-3.jpg',link:''},
        {id:4,name:'دستگاه پمپ باد',newPrice:'40000',prevPrice:'50000',img:'./imgs/products/new products/product-4.jpg',link:''},
        {id:5,name:'دریل برقی مدل x',newPrice:'40000',prevPrice:'50000',img:'./imgs/products/new products/product-5.jpg',link:''},

    ]
  
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
