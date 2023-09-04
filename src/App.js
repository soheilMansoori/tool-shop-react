import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./componemts/Navbar/Navbar";
import HomePage from "./Pages/HomePage";
import Footer from "./componemts/Footer/Footer";


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
