import { Container } from '@mui/material'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import BestSellingCard from '../cards/BestSellingCard';




function BestSellingProducts() {

  const bestSellingProducts = [
    {id:1,name:'دستگاه پمپ باد',newPrice:'3000',prevPrice:'4000',img:'./imgs/Bestsllling/Best-1.jpg',allCount:"100",count:"20",} ,
    {id:2,name:'دریل چکشی با کیف',newPrice:'3000',prevPrice:'4000',img:'./imgs/Bestsllling/Best-2.jpg',allCount:'30',count:'25',} ,
    {id:3,name:'دریل بتن کن مته ای',newPrice:'3000',prevPrice:'4000',img:'./imgs/Bestsllling/Best-3.jpg',allCount:'70',count:'40',} ,
    {id:4,name:'دریل شارژی دیوالت',newPrice:'3000',prevPrice:'4000',img:'./imgs/Bestsllling/Best-4.jpg',allCount:'30',count:'21',} ,
    {id:5,name:'دستگاه ingco',newPrice:'3000',prevPrice:'4000',img:'./imgs/Bestsllling/Best-5.jpg',allCount:"20",count:"8",} ,
  ]

  return (
<section className="my-14 px-4">
  <Container maxWidth='xl'>

      <div className="text-center mb-8">
        <h2 className="text-3xl">پرفروش ترین کالاها</h2>
      </div>

      <Swiper
        breakpoints={{
          0 : {
              slidesPerView: 1,
              spaceBetween: 10,
          },
          768 : {
              slidesPerView: 2,
              spaceBetween: 10,
          },
          1200 : {
              slidesPerView: 4,
              spaceBetween: 10,
          },
      }}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            }}
        modules={[Autoplay]}
      >
        {bestSellingProducts.map(product=>(
        <SwiperSlide key={product.id} className='bg-transparent'>
            <BestSellingCard {...product} />
        </SwiperSlide>
        ))}        
        
      </Swiper>
  </Container>
</section>
  )
}

export default BestSellingProducts
