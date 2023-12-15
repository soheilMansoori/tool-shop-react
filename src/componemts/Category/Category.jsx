import React from 'react'
import Container from '@mui/material/Container'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay } from 'swiper/modules';


function Category() {
  const category = [
    { id: 1, name: 'سنگ فرز', img: '/imgs/Category/ca-1.png', src: '/' },
    { id: 2, name: 'دریل شارژی', img: '/imgs/Category/ca-2.png', src: '/' },
    { id: 3, name: 'اره ساده', img: '/imgs/Category/ca-3.png', src: '/' },
    { id: 4, name: 'اره چکشی', img: '/imgs/Category/ca-4.png', src: '/' },
    { id: 5, name: 'پیچ گوشتی', img: '/imgs/Category/ca-5.png', src: '/' },
    { id: 6, name: 'اره دم روباهی', img: '/imgs/Category/ca-6.png', src: '/' },
    { id: 7, name: 'چکش', img: '/imgs/Category/ca-7.png', src: '/' },
  ]
  return (

    <section className="my-14 px-4">
      <Container maxWidth="xl">
        <div className="text-center mb-8">
          <h2 className="font-YekanBakh-ExtraBlack text-3xl">دسته بندی محصولات</h2>
        </div>


        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            375: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >

          {category.map((category) => (
            <SwiperSlide key={category.id} className='bg-transparent'>
              <div style={{ width: '200.833px' }} className="border border-slate-200 bg-white rounded-3xl leading-10">
                <a href="/" className="flex flex-col items-center justify-center p-4">
                  <div className='w-16 mb-3'>
                    <img src={category.img} alt="" />
                  </div>
                  <h3 className="text-base">{category.name}</h3>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>


  )
}

export default Category
