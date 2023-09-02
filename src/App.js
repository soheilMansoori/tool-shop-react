import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./componemts/Navbar/Navbar";
import HomePage from "./Pages/HomePage";


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
