import React from 'react'
import { Link } from 'react-router-dom'

function LoginPage() {
  return (
<section className="h-screen px-4 flex items-center">
        <div className="container mx-auto max-w-screen-lg">
            <div className="bg-white rounded-2xl overflow-hidden">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1 p-8 md:p-4 lg:p-20 lg:pb-0">
                        <form action="">
                            <h2 className="text-3xl font-YekanBakh-ExtraBlack my-4">ورود</h2>
                            <label className="label">
                                <span className="label-text-alt">نام کاربری:</span>
                              </label>
                            <input type="text" className="input input-bordered w-full my-2" />
                            <label className="label">
                                <span className="label-text-alt">پسورد:</span>
                              </label>
                            <input type="password" className="input input-bordered w-full my-2" />
                            <button className="btn bg-stone-800 hover:bg-stone-900 text-white w-full my-4">ورود</button>
                        </form>
                        <p className="text-center my-4">رمز عبور خود را <a href="">فراموش </a>کرده اید؟</p>
                        <div className="divider my-8">یا</div>
                        <p className="text-center my-4"><Link to='/signup'>حساب کاربری ندارید !!!</Link></p>
                    </div>
                    <div className="hidden md:block">
                        <img className="bg-cover" src="./imgs/login/login.jpg" />
                    </div>
                </div>
            </div>
            </div>
    </section>  
    )
}

export default LoginPage
