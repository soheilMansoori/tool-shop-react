import React from 'react'
import Container from '@mui/material/Container'
import ProductCard from '../cards/ProductCard'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay } from 'swiper/modules';

function SimilarProducts() {
  const similarProducts = [
    { id: 1, name: 'کیف کمری ابزار', newPrice: '40000', prevPrice: '50000', img: '/imgs/products/new products/product-1.jpg', link: '' },
    { id: 2, name: 'دریل شارژی دیوالت', newPrice: '40000', prevPrice: '50000', img: '/imgs/products/new products/product-2.jpg', link: '', colors: ['#EF4444', '#EAB308'] },
    { id: 3, name: 'دستگاه مدل ingco', newPrice: '40000', prevPrice: '50000', img: '/imgs/products/new products/product-3.jpg', link: '' },
    { id: 4, name: 'دستگاه پمپ باد', newPrice: '40000', prevPrice: '50000', img: '/imgs/products/new products/product-4.jpg', link: '' },
    { id: 5, name: 'دریل برقی مدل x', newPrice: '40000', prevPrice: '50000', img: '/imgs/products/new products/product-5.jpg', link: '' },
  ]


  return (
    <section className='mb-20 mt-4 px-4'>
      <Container maxWidth="xl">
        <div className="bg-white rounded-3xl p-8 leading-8">
          <p className="text-3xl mb-4">محصولات مشابه</p>

          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1440: {
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
            {similarProducts.map((product) => (
              <SwiperSlide key={product.id} className='bg-transparent'>
                <ProductCard {...product} />
              </SwiperSlide>
            ))}

          </Swiper>
        </div>
      </Container>
    </section>
  )
}

export default SimilarProducts
