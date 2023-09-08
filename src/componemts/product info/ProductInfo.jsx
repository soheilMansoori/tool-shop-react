import Container from '@mui/material/Container'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles 
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

// import required modules
import { FreeMode, Thumbs} from 'swiper/modules';
import { useState } from 'react';


function ProductInfo() {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const imgs = [
    {id:1,src:'./imgs/products/product-1.jpg'},
    {id:2,src:'./imgs/products/product-2.jpg'},
    {id:3,src:'./imgs/products/product-3.jpg'},
    {id:4,src:'./imgs/products/product-4.jpg'},
  ]

    

  return (
    <section>
      <Container maxWidth="xl">
      <div className=" bg-white p-4 rounded-3xl">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-4">

      <div>
      {/* topSlider */}
       <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode,  Thumbs]}
        >
          {imgs.map(img => (
            <SwiperSlide key={img.id}>
              <img src={img.src} />
            </SwiperSlide>
          ))}
      </Swiper>
{/* bottomSlider  */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        >
          {imgs.map(img => (
            <SwiperSlide key={img.id}>
              <div>
                <img src={img.src} />
              </div>
            </SwiperSlide>
          ))}
      </Swiper> 
    </div>
  </div>

              <div className="col-span-12 md:col-span-8">
                <div className="p-4">
                  <div className="bg-stone-50 rounded-xl p-4 leading-8">
                    <h1 className="font-YekanBakh-ExtraBold text-base">دریل شارژی دیلو</h1>
                    <p>دسته بندی: دریل ها</p>
                  </div>
                  <div className="grid grid-cols-12 mt-4">
                    <div className="col-span-12 lg:col-span-8 p-4">
                      <ul className="leading-8 text-stone-500">
                        <li>ولتاژ: 18 ولت</li>
                        <li>منبع تغذیه: باتری</li>
                        <li>مدل: رونیکس</li>
                        <li>وزن: 250 گرم</li>
                        <li>ابعاد: 60 در 40</li>
                        <li>اقلام: دفترچه</li>
                      </ul>
                      <div className="flex gap-4 text-base mt-4">
                        <span className="line-through">360.000 تومان</span>
                        <span className="text-yellow-500">280.000 تومان</span>
                      </div>
                      <button className="btn bg-stone-800 hover:bg-stone-900 text-white my-6">افزودن به سبد خرید</button>
                      <div>
                        <a className="border px-4 py-2 rounded-xl" href="comparison.html">افزودن به مقایسه</a>
                      </div>
                    </div>
                    <div className="hidden lg:block col-span-4">
                      <div className="flex items-center border rounded-lg my-2 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-yellow-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"></path>
                        </svg>
                        <span className="mr-2">بهترین قیمت</span>                        
                      </div>
                      <div className="flex items-center border rounded-lg my-2 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-yellow-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"></path>
                        </svg>
                        
                        <span className="mr-2">تضمین اصل بودن محصول</span>                        
                      </div>
                      <div className="flex items-center border rounded-lg my-2 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-yellow-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"></path>
                        </svg>
                        
                        <span className="mr-2">ارسال سریع</span>                        
                      </div>
                      <div className="flex items-center border rounded-lg my-2 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-yellow-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"></path>
                        </svg>
                        
                        <span className="mr-2">مشاوره قبل از خرید</span>                        
                      </div>
                      <div className="flex items-center border rounded-lg my-2 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-yellow-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"></path>
                        </svg>
                        
                        <span className="mr-2">بسته بندی زیبا</span>                        
                      </div>
                      <div className="flex items-center border rounded-lg my-2 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-yellow-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"></path>
                        </svg>
                        
                        <span className="mr-2">رضایت کاربران</span>                        
                      </div>
                      <div className="flex items-center border rounded-lg my-2 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-yellow-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                        </svg>
                        
                        <span className="mr-2">تایید فروشنده توسط ترازو</span>                        
                      </div>

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

export default ProductInfo


