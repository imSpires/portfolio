import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects'
import Contact from './components/Contact';
import ContactLink from './components/ContactLink';
import Footer from './components/Footer';
import "./style.css";


function App() {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Projects />
      <Contact />
      <ContactLink />
      <Footer />
    </div>
  )
}

export default App;
