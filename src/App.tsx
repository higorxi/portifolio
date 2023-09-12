import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact' 
import Footer from './components/Footer';
import CourseCarousel from './components/CourseCarousel';
import Teste from './components/Teste';


function App() {
  return (
  <main>
    <Navbar />
    <About />
    <Teste/>
    <Projects />
    <Skills />
    <CourseCarousel/>
    <Contact />
    <Footer/>
  </main>
  );
}

export default App;
