import React from 'react'
import EmployeeSlider from '../componemts/aboutpage slider/EmployeeSlider'

function AboutPage() {
  return (
    <>
      <section className='my-14 px-4'>
        <div className="container mx-auto max-w-screen-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl">درباره ما</h2>
          </div>
          <div className="grid grid-cols-12 gap-4 md:gap-8">
            <div className="col-span-12 md:col-span-3 flex flex-col justify-center">
              <div className="bg-white border rounded-3xl p-4 flex items-center mb-4 flex-col text-center gap-4">
                <div className="bg-yellow-500 p-2 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"></path>
                  </svg>

                </div>
                <div>
                  <h3 className="text-base mb-2">1500 محصول</h3>
                  <p>انواع ترازو و ابزارآلات</p>
                </div>
              </div>
              <div className="bg-white border rounded-3xl p-4 flex items-center flex-col text-center gap-4">
                <div className="bg-yellow-500 p-2 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"></path>
                  </svg>

                </div>
                <div>
                  <h3 className="text-base mb-2">10 سال فعالیت</h3>
                  <p>اولین مارکت فروش ابزار در ایران</p>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <img className="rounded-3xl" src="/imgs/about company/about.jpg" />
            </div>
            <div className="col-span-12 md:col-span-3 flex flex-col justify-center">
              <div className="bg-white border rounded-3xl p-4 flex items-center mb-4 flex-col text-center gap-4">
                <div className="bg-yellow-500 p-2 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"></path>
                  </svg>

                </div>
                <div>
                  <h3 className="text-base mb-2">رضایت کاربران</h3>
                  <p>بالای 1 میلیون رضایت کاربران</p>
                </div>
              </div>
              <div className="bg-white border rounded-3xl p-4 flex items-center flex-col text-center gap-4">
                <div className="bg-yellow-500 p-2 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"></path>
                  </svg>

                </div>
                <div>
                  <h3 className="text-base mb-2">ارزان تر از همه جا</h3>
                  <p>خرید 1000 محصول با کد تخفیف</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="my-14 px-4">
        <div className="container mx-auto max-w-screen-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl">درباره شرکت بخوانید</h2>
          </div>
          <div className="leading-8">
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
          </div>
        </div>
      </section>

      {/* slider */}
      <EmployeeSlider />
    </>
  )
}

export default AboutPage
