
/**IMPORTS**/
import './App.css'
import Header from './Components/Header/Header';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';

//APP
function App() {
  

  return (
    <>
      <Navbar/>
      <Header/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
     
    </>
  )
}

export default App
