function Aside() {
  return (
    <>
                {/* fliter box */}
                <div className="col-span-12 lg:col-span-3 order-1">
                  {/* fliter price */}
                  <div className="bg-white rounded-3xl mb-4 p-4">
                    <h3 className="text-base">فیلتر بر اساس قیمت:</h3>
                    <div className="my-4">
                      <input type="range" min="0" max="100" className="range range-warning" />
                    </div>
                    <span>قیمت تا 143000 هزار تومان</span>
                  </div>
                  {/* category */}
                  <div className="bg-white rounded-3xl mb-4 p-4">
                    <h3 className="text-base">دسته های محصولات:</h3>
                    <div className="my-4">
                    <ul className="menu">
                        <li><a>دسته بندی اول</a></li>
                        <li>
                          <details>
                            <summary>دسته بندی دوم</summary>
                            <ul>
                              <li><a>زیر منوی 1 دسته بندی دوم</a></li>
                              <li><a>زیر منوی 2 دسته بندی دوم</a></li>
                              <li>
                                <details>
                                  <summary>دسته بندی سوم</summary>
                                  <ul>
                                    <li><a>زیر منوی 1 دسته بندی سوم</a></li>
                                    <li><a>زیر منوی 2 دسته بندی سوم</a></li>
                                  </ul>
                                </details>
                              </li>
                            </ul>
                          </details>
                        </li>
                        <li><a>دسته بندی چهارم</a></li>
                      </ul>                    </div>
                  </div>

                  {/* fliter brand */}
                  <div className="bg-white rounded-3xl p-4">
                    <h3 className="font-YekanBakh-ExtraBold text-base">فیلتر براساس برند:</h3>
                    <div className="flex flex-col mt-4 gap-4">
                      <div className="flex items-center justify-between">
                        <span>رونیکس</span>
                        <input type="radio" name="radio-6" className="radio radio-warning" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>دیوالت</span>
                        <input type="radio" name="radio-6" className="radio radio-warning" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>ماکیتا</span>
                        <input type="radio" name="radio-6" className="radio radio-warning" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>توسن</span>
                        <input type="radio" name="radio-6" className="radio radio-warning" />
                      </div>
                    </div>
                  </div>
                </div>

    </>
  )
}

export default Aside
