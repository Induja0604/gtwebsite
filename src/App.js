import React from 'react'
import Addressbar from './Components/Addressbar/Addressbar'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer';
import {Route,Routes} from "react-router-dom";
import Registrationpage from './Pages/Registrationpage';
import Homepage from './Pages/Homepage';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Webpage from './Pages/Webpage';
import Pythonpage from './Pages/Pythonpage';
import Testingpage from './Pages/Testingpage';
import Fpgapage from './Pages/Fpgapage';
import Coding from './Components/Coding/Coding';
const App = () => {
  return (
    <div>
      <Addressbar/>
      <Navbar/>
      <Routes>
          <Route index element={<Homepage />} /> 
          <Route path="/registrationpage" element={<Registrationpage />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/webpage"  element={<Webpage/>} />
          <Route path="/pythonpage"  element={<Pythonpage/>} />
          <Route path="/testingpage" element={<Testingpage/>}/>
          <Route path="/fpgapage" element={< Fpgapage/>} />
          <Route path='/coding' element={<Coding/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App



