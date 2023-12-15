import React from 'react'
import { Link } from 'react-router-dom'

function SignupPage() {
    return (
        <section className="h-screen px-4 flex items-center">
            <div className="container mx-auto max-w-screen-lg">
                <div className="bg-white rounded-2xl overflow-hidden">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex-1 p-8 md:p-4 lg:p-20 lg:pb-0">
                            <form action="">
                                <h2 className="text-3xl font-YekanBakh-ExtraBlack my-4">ثبت نام</h2>
                                <label className="label">
                                    <span className="label-text-alt">نام و نام خانوادگی:</span>
                                </label>
                                <input type="text" className="input input-bordered w-full my-2" />
                                <label className="label">
                                    <span className="label-text-alt">ایمیل:</span>
                                </label>
                                <input type="email" className="input input-bordered w-full my-2" />
                                <label className="label">
                                    <span className="label-text-alt">پسورد:</span>
                                </label>
                                <input type="password" className="input input-bordered w-full my-2" />
                                <button className="btn bg-stone-800 hover:bg-stone-900 text-white w-full my-4">ثبت نام</button>
                            </form>
                            <p className="text-center my-4">قبلا ثبت نام کرده اید؟ <Link to='/login'>وارد شوید</Link></p>
                        </div>
                        <div className="hidden md:block">
                            <img className="bg-cover" src="/imgs/signup/sign-up.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default SignupPage 
