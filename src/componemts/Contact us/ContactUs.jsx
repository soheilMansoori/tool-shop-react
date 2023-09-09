import React from 'react'

function ContactUs() {
  return (
    <section className='pb-10'>
      <div className="grid grid-cols-12 gap-4 bg-white rounded-3xl p-4">
              <div className="p-4 col-span-12 xl:col-span-6">
                <h3 className="text-xl mb-2">راه های ارتباطی ...</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white border rounded-3xl p-4 flex items-center flex-col text-center gap-4">
                    <div className="bg-yellow-500 p-2 rounded-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path>
                      </svg>                      
                    </div>
                    <div>
                      <h3 className="text-base mb-2">ایمیل:</h3>
                      <p>info@rtl-theme.com</p>
                    </div>
                  </div>
                  <div className="bg-white border rounded-3xl p-4 flex items-center flex-col text-center gap-4">
                    <div className="bg-yellow-500 p-2 rounded-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                      </svg>                      
                    </div>
                    <div>
                      <h3 className="text-base mb-2">آدرس:</h3>
                      <p> تهران، خیابان، کوچه، فرعی 2</p>
                    </div>
                  </div>
                  <div className="bg-white border rounded-3xl p-4 flex items-center flex-col text-center gap-4">
                    <div className="bg-yellow-500 p-2 rounded-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path>
                      </svg>                     
                    </div>
                    <div>
                      <h3 className="text-base mb-2">تماس:</h3>
                      <p>038-32221503</p>
                    </div>
                  </div>
                  <div className="bg-white border rounded-3xl p-4 flex items-center flex-col text-center gap-4">
                    <div className="bg-yellow-500 p-2 rounded-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                                            
                    </div>
                    <div>
                      <h3 className="text-base mb-2">ساعت کاری:</h3>
                      <p>9 الی 15</p>
                    </div>
                  </div>
                </div>
              </div>



              <div className="p-4 col-span-12 xl:col-span-6">
                <h3 className="text-xl mb-2">با ما در ارتباط باشید...</h3>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text-alt">موضوع پیام:</span>
                  </label>
                  <input type="text" className="input input-bordered w-full" />
                  <label className="label">
                    <span className="label-text-alt">پست الکترونیکی:</span>
                  </label>
                  <input type="email" className="input input-bordered w-full" />
                  <label className="label">
                    <span className="label-text-alt">متن پیام:</span>
                  </label>
                  <textarea className="textarea textarea-bordered h-24" placeholder="متن پیام را بنویسید..."></textarea>
                  <button className="btn bg-stone-800 hover:bg-stone-900 text-white my-3">ارسال پیام</button>
                </div>
              </div>
            </div>
    </section>
  )
}

export default ContactUs
