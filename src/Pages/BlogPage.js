import React from 'react'
import Container from '@mui/material/Container'
import Stepper from '../componemts/Stepper/Stepper'
import BlogCard from '../componemts/cards/BlogCard'
import { Pagination } from '@mui/material'
function BlogPage() {
    const stepper = [
        {id:1,pageName:'خانه',link:'/'},
        {id:2,pageName:'دسته بندی',link:''},
        {id:3,pageName:'وبلاگ',link:'/blog'},
      ]

      const blog = [
        {id:1,name:'راهنمای خرید انواع مته',img:'./imgs/Blogs/blog-1.jpg',day:'26',month:'خرداد',link:''},
        {id:2,name:'تعمیر قلاب ماهیگیری',img:'./imgs/Blogs/blog-2.jpg',day:'4',month:'اذر',link:''},
        {id:3,name:'تمیز کردن لوازم کارگاهی',img:'./imgs/Blogs/blog-3.jpg',day:'10',month:'مهر',link:''},
        {id:4,name:'تمیز کردن لوازم کارگاهی',img:'./imgs/Blogs/blog-4.jpg',day:'10',month:'مهر',link:''},
        {id:5,name:'تمیز کردن لوازم کارگاهی',img:'./imgs/Blogs/blog-5.jpg',day:'10',month:'مهر',link:''},
        {id:6,name:'تمیز کردن لوازم کارگاهی',img:'./imgs/Blogs/blog-6.jpg',day:'10',month:'مهر',link:''},
    
    ]

    
  return (
    <section className='my-14'>
        <Stepper stepper={stepper}/>
        <Container maxWidth="xl">
            <div className="grid grid-cols-12 gap-4 mb-8">
                {blog.map(blog=>(
                    <div className='col-span-12 md:col-span-6 xl:col-span-4' key={blog.id}>
                        <BlogCard {...blog}/>
                    </div>
                ))}
                <div className='col-span-12 flex justify-center my-10' dir='ltr'>
                    <Pagination count={10} defaultPage={1} siblingCount={1} size='small'/>
                </div>

            </div>
        </Container>
    </section>
  )
}

export default BlogPage
