import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
<section className="h-screen px-4 flex items-center">
        <div className="container mx-auto max-w-screen-sm text-center leading-10">
            <img className="w-3/4 mb-16 mx-auto" src="./imgs/404/404.png" />
            <p className="text-3xl mb-4">صفحه مورد نظر یافت نشد!!</p>
            <Link to='/' className="bg-yellow-500 py-2 px-6 rounded-xl">برو به صفحه اصلی</Link>
        </div>
</section>  
    )
}

export default NotFoundPage
