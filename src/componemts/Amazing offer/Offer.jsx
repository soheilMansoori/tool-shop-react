import React from 'react'
import Container from '@mui/material/Container'
import ProductCard from '../cards/ProductCard'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay } from 'swiper/modules';
import Countdown from 'react-countdown';



function Offer() {

  const products = [
    { id: 1, name: 'دریل بتن کن میلی متری', newPrice: '40000', prevPrice: '50000', img: '/imgs/products/product-1.jpg', offer: '30%', link: '' },
    { id: 2, name: 'دریل شارژی مدل دیوالت', newPrice: '9000', prevPrice: '10000', img: '/imgs/products/product-4.jpg', offer: '50%', link: '', colors: ['#EF4444', '#EAB308'] },
    { id: 3, name: 'دستگاه مدل Henzax', newPrice: '9000', prevPrice: '10000', img: '/imgs/products/product-2.jpg', offer: '10%', link: '' },
    { id: 4, name: 'دستگاه جوشکاری', newPrice: '100', prevPrice: '1000', img: '/imgs/products/product-3.jpg', offer: '90%', link: '' },
  ]



  // Renderer callback 
  const renderer = ({ days, hours, minutes, seconds }) => {
    // Render a countdown
    return (
      <>
        <div className="flex flex-col text-center text-white bg-stone-900 px-2 py-4 rounded-2xl">
          <span className='mb-2 text-3xl'>{seconds}</span>
          ثانیه
        </div>
        <div className="flex flex-col text-center text-white bg-stone-900 px-2 py-4 rounded-2xl">
          <span className='mb-2 text-3xl'>{minutes}</span>
          دقیقه
        </div>
        <div className="flex flex-col text-center text-white bg-stone-900 px-2 py-4 rounded-2xl">
          <span className='mb-2 text-3xl'>{hours}</span>
          ساعت
        </div>
        <div className="flex flex-col text-center text-white bg-stone-900 px-2 py-4 rounded-2xl">
          <span className='mb-2 text-3xl'>{days}</span>
          روز
        </div>
      </>
    )
  };



  return (
    <section>
      <Container maxWidth="xl">
        <div className="bg-yellow-500 rounded-3xl pt-10 pb-4">

          <div className="text-center mb-8">
            <h2 className="text-3xl">پیشنهاد شگفت انگیز</h2>
          </div>

          <div className="grid grid-cols-12 gap-4 p-4">
            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                425: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper col-span-12 lg:col-span-9 bg-transparent order-2 lg:order-1"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id} className='bg-transparent rounded-3xl'>
                  <ProductCard {...product} />
                </SwiperSlide>
              ))}

            </Swiper>

            {/* offer img and timer */}
            <div className="col-span-12 lg:col-span-3 order-1 lg:order-2">
              <div className="bg-stone-800 rounded-3xl p-4 h-full">
                <div className="flex flex-col justify-between leading-8 h-full">
                  <p className="text-white text-center">با 30 درصد تخفیف شگفتانه محصول خود را خریداری کنید :)</p>
                  <div className="flex justify-center my-12">
                    <img className="w-48" src="/imgs/offer/off.png" alt="offer" />
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4  gap-2 leading-4">
                    <Countdown
                      daysInHours={true}
                      date={Date.now() + 100000000}
                      renderer={renderer}
                    />
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  )
}

export default Offer



