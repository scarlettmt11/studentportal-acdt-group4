import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import "./css/App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Resources from "./pages/Resources";
import VolunteerForm from "./pages/VolunteerForm";
import Tips from "./pages/Tips";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/volunteer" element ={<VolunteerForm />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;