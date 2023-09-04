import React from 'react'

function BlogCard({name,img,day,month}) {
  return (
<div className="bg-white p-4 rounded-3xl">
            <div className="relative">
              <a href="single-page.html"><img className="rounded-2xl" src={img} alt="" /></a>
              <div className={
                day || month ?
                "absolute top-4 left-4 bg-white border-t-4 border-yellow-400 p-2 px-3 rounded-xl"
                :
                'hidden'
              }>
                <div className="flex flex-col">
                  <span className="font-YekanBakh-ExtraBold text-2xl">{day}</span>
                  <span className="font-YekanBakh-Bold">{month}</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div>
                <a href="single-page.html"><h3 className="font-YekanBakh-ExtraBold text-base">{name}</h3></a>
              </div>
              <div>
                <a className="flex items-center" href="#">
                  <span className="ml-2">بیشتر</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"></path>
                  </svg> 
                </a>
              </div>
            </div>
          </div>
  )
}

export default BlogCard
