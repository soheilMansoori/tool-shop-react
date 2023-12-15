import React from 'react'
import Container from '@mui/material/Container'
import BlogCard from '../cards/BlogCard'

function Blog() {
  const blog = [
    { id: 1, name: 'راهنمای خرید انواع مته', img: '/imgs/Blogs/blog-1.jpg', day: '26', month: 'خرداد', link: '' },
    { id: 2, name: 'تعمیر قلاب ماهیگیری', img: '/imgs/Blogs/blog-2.jpg', day: '4', month: 'اذر', link: '' },
    { id: 3, name: 'تمیز کردن لوازم کارگاهی', img: '/imgs/Blogs/blog-3.jpg', day: '10', month: 'مهر', link: '' },
  ]

  return (
    <section className='my-14 px-4'>
      <Container maxWidth="xl">

        <div className="text-center mb-8">
          <h2 className="text-3xl">خواندنی های جدید</h2>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {blog.map(blog => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>

      </Container>
    </section>
  )
}

export default Blog
