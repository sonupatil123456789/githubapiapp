
import Footer from "./Footer";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Allpage from "./Allpage";
import Details from "./Details";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exat path="/" element={<Home />} />
        <Route exat path="/Allpage" element={<Allpage />} />
        <Route exat path="/Allpage/details" element={<Details/>} />
      </Routes> 
     <Footer />
    </>
  );
}

export default App;
