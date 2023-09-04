import { Container } from '@mui/material'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import BestSellingCard from '../cards/BestSellingCard';




function BestSellingProducts() {

  const bestSellingProducts = [
    {id:1,name:'دستگاه پمپ باد',newPrice:'3000',prevPrice:'4000',img:'./imgs/Bestsllling/Best-1.jpg',allCount:'',count:'',} ,
    {id:2,name:'دریل چکشی با کیف',newPrice:'3000',prevPrice:'4000',img:'./imgs/Bestsllling/Best-2.jpg',allCount:'',count:'',} ,
    {id:3,name:'دریل بتن کن مته ای',newPrice:'3000',prevPrice:'4000',img:'./imgs/Bestsllling/Best-3.jpg',allCount:'',count:'',} ,
    {id:4,name:'دریل شارژی دیوالت',newPrice:'3000',prevPrice:'4000',img:'./imgs/Bestsllling/Best-4.jpg',allCount:'',count:'',} ,
    {id:5,name:'دستگاه ingco',newPrice:'3000',prevPrice:'4000',img:'./imgs/Bestsllling/Best-5.jpg',allCount:'',count:'',} ,
  ]

  return (
<section class="my-14 px-4">
  <Container maxWidth='xl'>

      <div class="text-center mb-8">
        <h2 class="text-3xl">پرفروش ترین کالاها</h2>
      </div>

      <Swiper
        breakpoints={{
          '@0.00' : {
              slidesPerView: 1,
              spaceBetween: 10,
          },
          '@1.75' : {
              slidesPerView: 2,
              spaceBetween: 10,
          },
          '@2.25' : {
              slidesPerView: 2,
              spaceBetween: 10,
          },
          '@2.75' : {
              slidesPerView: 4,
              spaceBetween: 10,
          }
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
