import { LinearProgress } from '@mui/material'
import React from 'react'

function BestSellingCard({name,img,newPrice,prevPrice,allCount,count}) {



  return (

<div class="bg-white leading-10 relative p-4 w-full rounded-3xl">
    <div class="flex items-center justify-center">
      <div class="w-36">
        <a href="/"> <img src={img} alt="" /></a>
      </div>
      <div>
        <a href="/"><h3 class="text-base">{name}</h3></a>
        <div class="flex justify-center gap-4 text-base mt-4">
          <span class="line-through">{prevPrice} تومان</span>
        <span class="text-yellow-500">{newPrice} تومان</span>
        </div>
      </div>
    </div>

    <div class="flex items-center text-sm justify-center gap-4">
        <div>موجودی: 7 از 20</div>
        <div className='w-1/2'><LinearProgress variant="determinate" color='success' value={10} /></div>
    </div>
</div>

)
}

export default BestSellingCard
