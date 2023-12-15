import { Container } from '@mui/material';
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// slider css
import './slider.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';


function Slider() {
  const sliderImg = [
    { id: 1, src: '/imgs/slider/slider-1.jpg', alt: '1/2', link: '/' },
    { id: 2, src: '/imgs/slider/slider-2.jpg', alt: '2/2', link: '/' },
  ]
  return (
    <section>
      <Container maxWidth='xl' className='mt-10'>

        <Swiper
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {sliderImg.map((img) => (
            <SwiperSlide key={img.id} className='bg-transparent'>
              <img src={img.src} alt={img.alt} className='rounded-3xl' />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  )
}


export default Slider
