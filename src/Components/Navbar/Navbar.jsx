
//Imports
import React from 'react';
import styles from './NavbarStyles.module.css';
import { useState } from 'react';





export const Navbar = () => {

  //State 
  //Use State
  const [isOpen, setIsOpen] = useState(false);
  //Toggle Menu
  const toggleMenu = () => {
      setIsOpen(!isOpen);
  };

  return (
    <nav>
      <h2 className={styles.title}>Mbengue</h2>

      {/**Nav Bar**/}
      <ul className={isOpen ? styles.open : ''}>
          <li> <a href = '#home'>Home</a></li>
          <li ><a href="#about">About</a></li>
          <li ><a href="#projects">Projects</a></li>
          <li ><a href="#skills">Skills</a></li>
          <li ><a href="#contact">Contact</a></li>
      </ul>


      {/**HAmburger Menu**/}
      <div className={styles.menu} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}


export default Navbar;