import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Portfolio/Navbar';
import Home from './Portfolio/home';
import About from './Portfolio/about';
import Skills from './Portfolio/skills';
import Contact from './Portfolio/contact';
import Footer from './Portfolio/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
    <Router>
      <NavBar />
      <div className="container mt-0.5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;

