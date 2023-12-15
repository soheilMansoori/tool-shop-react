import { useRoutes } from "react-router-dom";
import Navbar from "./componemts/Navbar/Navbar";
import Footer from "./componemts/Footer/Footer";
import routes from './Routes/routes'
import productContext from './context/productContext/productContext'
import userContext from './context/userContext/userContext'

function App() {
  const router = useRoutes(routes)
  return (
    <>
      <userContext.Provider>
        <productContext.Provider value={'test'}>
          <Navbar />
          {router}
          <Footer />
        </productContext.Provider>
      </userContext.Provider>
    </>
  );
}

export default App;
