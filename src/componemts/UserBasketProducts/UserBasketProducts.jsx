import React from 'react'

function UserBasketProducts() {
    return (
        <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-12 xl:col-span-8">
                <div className="bg-white rounded-3xl p-4 flex flex-col md:flex-row items-center justify-center mb-4 gap-16">
                    <div>
                        <img className="w-32 border rounded-2xl" src="/imgs/products/product-1.jpg" />
                    </div>
                    <div className="leading-10">
                        <h1 className="text-base">دریل شارژِ مدل رونیکس</h1>
                        <p>دسته بندی: دریل ها</p>

                    </div>
                    <div className="flex gap-4 text-base mt-4">
                        <span className="line-through">360.000 تومان</span>
                        <span className="text-yellow-500">280.000 تومان</span>
                    </div>
                    <div>
                        <div className="flex">
                            <span className="minus p-4">تعداد:</span>
                            <input type="text" className="input input-bordered text-center w-20" />

                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-3xl p-4 flex flex-col md:flex-row items-center justify-center mb-4 gap-16">
                    <div>
                        <img className="w-32 border rounded-2xl" src="/imgs/products/product-2.jpg" alt="" />
                    </div>
                    <div className="leading-10">
                        <h1 className=" text-base">دریل شارژِ مدل رونیکس</h1>
                        <p>دسته بندی: دریل ها</p>

                    </div>
                    <div className="flex gap-4 text-base mt-4">
                        <span className="line-through">360.000 تومان</span>
                        <span className="text-yellow-500">280.000 تومان</span>
                    </div>
                    <div>
                        <div className="flex">
                            <span className="minus p-4">تعداد:</span>
                            <input type="text" className="input input-bordered text-center w-20" />

                        </div>
                    </div>
                </div>
            </div>

            <div className="col-span-12 md:col-span-12 xl:col-span-3">
                <div className="bg-white rounded-3xl p-8">
                    <div className="flex flex-col text-lg">
                        <div className="flex items-center justify-between p-4 bg-yellow-100 rounded-lg">
                            <span>تعداد خرید:</span>
                            <span>2 عدد</span>
                        </div>
                        <div className="flex items-center justify-between p-4">
                            <span>مبلغ کل:</span>
                            <span>300.000 تومان</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-yellow-100 rounded-lg">
                            <span>هزینه ارسال:</span>
                            <span>140.000</span>
                        </div>
                        <div className="flex items-center justify-between p-4">
                            <span>مبلغ نهایی:</span>
                            <span>440.000</span>
                        </div>
                        <button className="btn bg-stone-800 hover:bg-stone-900 text-white">پرداخت</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UserBasketProducts
