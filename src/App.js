import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nvabar from "./Commponents/Navbar/Nvabar";
import HomePage from "./Pages/HomePage";


function App() {
  return (
    <>
    <BrowserRouter>
      <Nvabar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
