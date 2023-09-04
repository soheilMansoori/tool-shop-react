import React from 'react'

function OfferCard({name,img,newPrice,prevPrice,offer,link}) {
  return (
                    <div className="bg-white leading-10 p-4">
                      <div className="relative">
                        <a href="single-product.html" className="flex flex-col items-center justify-center">
                          <img className="mb-4" src={img} alt="" />
                        </a>
                        <div className="bg-yellow-500 absolute top-2 right-2 rounded-full w-10 h-10">
                          <p className="flex items-center justify-center">{offer}</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <a href="single-product.html"><h3 className="font-YekanBakh-ExtraBold text-base">{name}</h3></a>
                        <div className="flex justify-center gap-4 text-base mt-4">
                          <span className="line-through">{prevPrice} تومان</span>
                          <span className="text-yellow-500">{newPrice} تومان</span>
                        </div>    
                      </div>
                      <div className="flex justify-center gap-2 items-center mt-4">
                        <a className="bg-yellow-500 p-2 text-white rounded-lg" href="/">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
                          </svg>                          
                        </a>
                        <a className="bg-yellow-500 p-2 text-white rounded-lg" href="/">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
  )
}

export default OfferCard
