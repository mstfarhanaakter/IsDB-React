
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './components/Home/Home';
import AboutUs from './components/About-Us/AboutUs';
import Footer from './components/Footer/Footer'
import Contact from './Contact/Contact';

function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />

        </Routes>



      </BrowserRouter>

    </>
  )
}

export default App
