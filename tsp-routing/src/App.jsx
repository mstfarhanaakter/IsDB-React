import { BrowserRouter, Routes, Route } from "react-router";
import Home from './components/Home/Home';
import AboutUs from './components/About-Us/AboutUs';
import Footer from './components/Footer/Footer'
import Contact from './Contact/Contact';
import AboutCompany from './components/About-Us/AboutCompany';

function App() {


  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} >
            <Route path="company" element={<AboutCompany/>} />
          </Route>
          <Route path="/Contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />

        </Routes>



      </BrowserRouter>

      <h1 className="bg-red-500 text-white"> Hello</h1>

    </>
  )
}

export default App
