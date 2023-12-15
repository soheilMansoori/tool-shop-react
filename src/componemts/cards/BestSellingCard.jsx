import React from 'react'

function BestSellingCard({ name, img, newPrice, prevPrice, allCount, count }) {
  return (

    <div className="bg-white leading-10 relative p-4 w-full rounded-3xl">
      <div className="flex items-center justify-center">
        <div className="w-36">
          <a href="/"> <img src={img} alt="" /></a>
        </div>
        <div>
          <a href="/"><h3 className="text-base">{name}</h3></a>
          <div className="flex justify-center gap-4 text-base mt-4">
            <span className="line-through">{prevPrice} تومان</span>
            <span className="text-yellow-500">{newPrice} تومان</span>
          </div>
        </div>
      </div>

      <div className="flex items-center text-sm justify-center gap-4">
        <div>موجودی: {count} از {allCount}</div>
        <div className='w-auto'>
          <progress value={count} max={allCount} id='progress'></progress>
        </div>
      </div>
    </div>

  )
}

export default BestSellingCard
