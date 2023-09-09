import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./componemts/Navbar/Navbar";
import HomePage from "./Pages/HomePage";
import Footer from "./componemts/Footer/Footer";
import ShopPage from "./Pages/ShopPage";
import ProductPage from "./Pages/ProductPage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import NotFoundPage from "./Pages/NotFoundPage";
import UserBasketPage from "./Pages/UserBasketPage";
import ContactPage from "./Pages/ContactPage";
import AboutPage from "./Pages/AboutPage";
import BlogPage from "./Pages/BlogPage";


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/shop" element={<ShopPage />}/>
        <Route path="/test" element={<ProductPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<SignupPage />}/>
        <Route path="/userbasket" element={<UserBasketPage />}/>
        <Route path="/contact" element={<ContactPage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/blog" element={<BlogPage />}/>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
