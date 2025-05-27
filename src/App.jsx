import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Hotels from "./routes/Hotels";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
       <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
