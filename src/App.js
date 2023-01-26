import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Warranty from "./Warranty";
import './App.css';

function App() {
  return(
    <Router>
      <nav>
        <Link to="/" className="first link" >E-Shop</Link>
        <Link to="/about" className="link">About us</Link>
        <Link to="/warranty" className="link">Warranty</Link>
        <Link to="/contact" className="link">Contact us</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/warranty" element={<Warranty/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  )
}

export default App;