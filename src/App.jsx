
// App.js
import './App.css'
import Header from './Components/Header/Header';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import AboutMe from './Components/About/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectDetails from './Components/ProjectDetails/ProjectDetails';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <>
            <Header/>
            <AboutMe/>
            <Projects/>
            <Skills/>
            <Contact/>
          </>
        } />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
