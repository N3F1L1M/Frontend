import { Route, Routes } from "react-router-dom";

import "./App.css";

import { Navbar } from "./components/Navbar";
import Barradebusqueda from "./components/Barradebusqueda";


import { About, Contact, Home, Services } from "./pages";

function App() {
  return (
    <div className="App">

      
      <Navbar />
      <Barradebusqueda />
      


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
