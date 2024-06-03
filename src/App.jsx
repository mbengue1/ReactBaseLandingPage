
/**IMPORTS**/
import './App.css'
import Header from './Components/Header/Header';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import AboutMe from './Components/About/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


//APP
function App() {
  

  return (
    <>
      <Navbar/>
      <Header/>
      <AboutMe/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
     
    </>
  )
}

export default App
