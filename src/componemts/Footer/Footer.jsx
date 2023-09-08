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
import BottomFooter from './BottomFooter';
import { useLocation } from 'react-router-dom';



function Footer() {
  let location = useLocation()

    const companySymbols = [
        {id:1 , imgSrc:'./imgs/CompanySymbols/symbol-1.png'},
        {id:2 , imgSrc:'./imgs/CompanySymbols/symbol-2.png'},
        {id:3 , imgSrc:'./imgs/CompanySymbols/symbol-3.png'},
        {id:4 , imgSrc:'./imgs/CompanySymbols/symbol-4.png'},
        {id:5 , imgSrc:'./imgs/CompanySymbols/symbol-5.png'},
        {id:6 , imgSrc:'./imgs/CompanySymbols/symbol-6.png'},
    ]
  return (
<>
<footer className={location.pathname === '/login' || location.pathname === '/signup' ? 'hidden' : ''}>
  <div className='p-10 bg-stone-800 text-white'>
        <Container maxWidth="xl">
        <div className="bg-yellow-500 p-8 rounded-3xl mb-10">
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
                slidesPerView: 5,
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
            {companySymbols.map((symbol)=>(
            <SwiperSlide key={symbol.id} className='bg-transparent'>
                <div>
                    <img src={symbol.imgSrc} />
                </div>  
            </SwiperSlide>
            ))}

        </Swiper>
        </div>


          <div className="grid grid-cols-12 gap-4 leading-8">
              <div className="col-span-12 lg:col-span-5">
                  <img className="mb-4" src="./imgs/Logo/logo.png" alt="" />
                  <p>
                    ترازو با فراهم آوردن تنوع معقولی از محصولات در کنار عرضه با قیمت مناسب آن‌ها، به دنبال خرید راحت و رضایت‌بخش ابزارآلات برای همراهان خودش است و این مهم را با مهیا کردن امکان بررسی فنی و کاربردی ابزارآلات و ارائه محتوای مناسب و غنی محقق می‌سازد.
                  </p>
              </div>
              <div className="col-span-12 lg:col-span-2 text-right md:text-center">
                  <h3 className="font-YekanBakh-Bold text-white mb-4 text-lg">دسترسی سریع</h3>
                  <ul>
                      <li><a href="index.html">صفحه اصلی</a></li>
                      <li><a href="shop.html">فروشگاه</a></li>
                      <li><a href="question.html">سوالات متداول</a></li>
                      <li><a href="contact-us.html">تماس با ما</a></li>
                      <li><a href="blog.html">وبلاگ</a></li>
                  </ul>
              </div>
              <div className="col-span-12 lg:col-span-2 text-right md:text-center">
                  <h3 className="font-YekanBakh-Bold text-white mb-4 text-lg">خدمات شرکت</h3>
                  <ul>
                      <li><a href="single-product.html">صفحه محصول</a></li>
                      <li><a href="single-page.html">جزئیات بلاگ</a></li>
                      <li><a href="successful.html">ثبت موفق</a></li>
                      <li><a href="unsuccessful.html">ثبت ناموفق</a></li>
                      <li><a href="404.html">404</a></li>
                  </ul>
              </div>
              <div className="col-span-12 lg:col-span-3">
                  <h3 className="font-YekanBakh-Bold text-white mb-4 text-lg">عضویت در خبرنامه</h3>
                  <div className="flex flex-col justify-start sm:flex-row items-center">
                    <img src="./imgs/Symbols/symbol-1.png" alt="" />
                    <img src="./imgs/Symbols/symbol-2.png" alt="" />
                  </div>
              </div>
          </div>
        </Container>
      </div>
    <BottomFooter />
    </footer>
</>
  )
}

export default Footer
