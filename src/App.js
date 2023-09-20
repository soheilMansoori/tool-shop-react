import { useRoutes } from "react-router-dom";
import Navbar from "./componemts/Navbar/Navbar";
import Footer from "./componemts/Footer/Footer";
import routes from './Routes/routes'

function App() {
  const router = useRoutes(routes)
  return (
    <>
      <Navbar />
          {router} 
      <Footer />
    </>
  );
}

export default App;
