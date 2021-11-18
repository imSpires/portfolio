import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Routes, Route} from "react-router-dom";
import "./style.css";


function App() {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Footer />
    </div>
  )
}

export default App;
