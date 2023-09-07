import React from 'react'
import Container from '@mui/material/Container'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay } from 'swiper/modules';
import ProductCard from '../cards/ProductCard';


function SuggestionProducts() {

    const newPprdoucts = [
        {id:1,name:'کیف کمری ابزار',newPrice:'40000',prevPrice:'50000',img:'./imgs/products/new products/product-1.jpg',link:''},
        {id:2,name:'دریل شارژی دیوالت',newPrice:'40000',prevPrice:'50000',img:'./imgs/products/new products/product-2.jpg',link:'',colors : ['#EF4444','#EAB308']},
        {id:3,name:'دستگاه مدل ingco',newPrice:'40000',prevPrice:'50000',img:'./imgs/products/new products/product-3.jpg',link:''},
        {id:4,name:'دستگاه پمپ باد',newPrice:'40000',prevPrice:'50000',img:'./imgs/products/new products/product-4.jpg',link:''},
        {id:5,name:'دریل برقی مدل x',newPrice:'40000',prevPrice:'50000',img:'./imgs/products/new products/product-5.jpg',link:''},

    ] 

  return (
    <section className='my-14 px-4'>
      <Container maxWidth="xl">
         <div className="text-center mb-8">
              <h2 className="text-3xl">پیشنهاد های ترازو</h2>
        </div>

        <Swiper
            breakpoints={{
              0 : {
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
            className="mySwiper"
          >
            {newPprdoucts.map((product)=>(
            <SwiperSlide key={product.id} className='bg-transparent'>
                <ProductCard {...product}/>
            </SwiperSlide>
            ))}

        </Swiper>

      </Container>
    </section>
  )
}

export default SuggestionProducts
