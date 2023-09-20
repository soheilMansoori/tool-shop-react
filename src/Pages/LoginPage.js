import { useState } from 'react'
import { Link } from 'react-router-dom'

function LoginPage() {
    // HOOKS
    const [userName,setUserName] = useState('')
    const [userNameValid,setUserNameValid] = useState(null)
    
    const [password,setPassword] = useState('')
    const [passwordValid,setPasswordValid] = useState(null)
    

    const userNameInput = (event) => {
        let inputUserNameValue = event.target.value
        let userNameRegEx = /^[a-z][^\W_]{4,12}$/i
        let hasValid = userNameRegEx.test(inputUserNameValue)
        setUserNameValid(hasValid)
        setUserName(inputUserNameValue)
        
        // console.log(userName)
        // console.log(userNameValid)    
    }
    
    
    const passwordInput = (event) => {
        let inputPasswordValue = event.target.value
        let passwordReEx = /^(?=[^a-z]*[a-z])(?=\D*\d)[^:&.~\s]{5,20}$/
        let hasPasswordValid = passwordReEx.test(inputPasswordValue)
        setPasswordValid(hasPasswordValid)
        setPassword(inputPasswordValue)
        
        // console.log(passwordValid)
        // console.log(password)
    }
    
    const formhandeler = (event) => {
        event.preventDefault()
        console.log('submit')
        console.log(userName)
        console.log(password)          
    }
    
    return (
<section className="h-screen px-4 flex items-center">
        <div className="container mx-auto max-w-screen-lg">
            <div className="bg-white rounded-2xl overflow-hidden">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1 p-8 md:p-4 lg:p-20 lg:pb-0">
                        <form onSubmit={(event)=>formhandeler(event)}>
                            <h2 className="text-3xl mt-20 xl:mt-0 my-4">ورود</h2>
                            <label className="label">
                                <span className="label-text-alt">نام کاربری:</span>
                              </label>
                            <input value={userName} onChange={userNameInput} type="text" className="input input-bordered w-full my-2" />
                                <span className={userNameValid ? 'hidden' : 'text-sm text-red-500 p-2'}>
                                    نام کاربری باید ۵ ۱۲ کلمه باشه
                                </span>
                            <label className="label">
                                <span className="label-text-alt">پسورد:</span>
                              </label>
                            <input value={password} onChange={(event)=>passwordInput(event)} type="password" className="input input-bordered w-full my-2" />
                                <span className={passwordValid ? 'hidden' : 'text-sm text-red-500 p-2'}>
                                    پسورد باید ۵ تا ۲۰ کلمه و شامل عدد باشد
                                </span>
                            <button type='submit' disabled={!userNameValid || !passwordValid} className="btn bg-stone-800 hover:bg-stone-900 text-white w-full my-4">ورود</button>
                        </form>
                        <p className="text-center my-4">رمز عبور خود را <Link to='/login'>فراموش </Link>کرده اید؟</p>
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
