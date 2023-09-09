// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './sliderstyle.css'

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Container from '@mui/material/Container'


function EmployeeSlider() {
    const imgs = [
        {id:1,imgsrc:'./imgs/Employee/employee-1.jpg'},
        {id:2,imgsrc:'./imgs/Employee/employee-2.jpg'},
        {id:3,imgsrc:'./imgs/Employee/employee-3.jpg'},
        {id:4,imgsrc:'./imgs/Employee/employee-4.jpg'},
        {id:5,imgsrc:'./imgs/Employee/employee-5.jpg'},
    ]
  return (
    <section className="my-14 px-4 py-20 bg-stone-100">
        <div className="container mx-auto max-w-screen-2xl">
            <div className="text-center mb-8">
                <h2 className="text-3xl">نیروی های ترازو</h2>
              </div>
              <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 1,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="test1"
        >
            {imgs && imgs.map(img=>(
            <SwiperSlide key={img.id}>
                <div>
                  <img src={img.imgsrc} />
                </div>
            </SwiperSlide>
            ))}
      </Swiper>

        </div>
</section>
  )
}

export default EmployeeSlider

