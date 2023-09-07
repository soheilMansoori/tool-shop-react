import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./componemts/Navbar/Navbar";
import HomePage from "./Pages/HomePage";
import Footer from "./componemts/Footer/Footer";
import ShopPage from "./Pages/ShopPage";
import ProductPage from "./Pages/ProductPage";


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/shop" element={<ShopPage />}/>
        {/* <Route path="/test" element={<ProductPage />}/> */}
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
