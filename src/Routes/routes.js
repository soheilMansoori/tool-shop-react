import HomePage from '../Pages/HomePage'
import ShopPage from '../Pages/ShopPage'
import ProductPage from '../Pages/ProductPage'
import LoginPage from '../Pages/LoginPage'
import SignupPage from '../Pages/SignupPage'
import UserBasketPage from '../Pages/UserBasketPage'
import ContactPage from '../Pages/ContactPage'
import AboutPage from '../Pages/AboutPage'
import BlogPage from '../Pages/BlogPage'
import NotFoundPage from '../Pages/NotFoundPage'

const routes = [ 
    {path:'/' , element: <HomePage />},
    {path:'/shop' , element: <ShopPage />},
    {path:'/product/:productID' , element: <ProductPage />},
    {path:'/login' , element: <LoginPage />},
    {path:'/signup' , element: <SignupPage />},
    {path:'/userbasket' , element: <UserBasketPage />},
    {path:'/contact' , element: <ContactPage />},
    {path:'/about' , element: <AboutPage />},
    {path:'/blog' , element: <BlogPage />},
    {path:'*' , element: <NotFoundPage />},
]

export default routes