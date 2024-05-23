
//Imports
import React from 'react';
import styles from './NavbarStyles.module.css';
import { useState } from 'react';


//NavBar
const Navbar = () => {

    //Use State
    const [isOpen, setIsOpen] = useState(false);
    //Toggle Menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


  return (
    <nav className={styles.container} id='navbar'>
        {/**Default NavBar**/}
      <div className={styles.navbarContainer}>
        <ul className={`${styles.navbarMenu} ${isOpen ? styles.open : ''}`}>
          <li className={styles.navbarItem}><a href="#hero" className={styles.navbarLink}>Home</a></li>
          <li className={styles.navbarItem}><a href="#about" className={styles.navbarLink}>About</a></li>
          <li className={styles.navbarItem}><a href="#projects" className={styles.navbarLink}>Projects</a></li>
          <li className={styles.navbarItem}><a href="#skills" className={styles.navbarLink}>Skills</a></li>
          <li className={styles.navbarItem}><a href="#contact" className={styles.navbarLink}>Contact</a></li>
        </ul>
        {/**Toggle Menu */}
        <div className={styles.toggle} onClick={toggleMenu}>
          <span className={styles.navbarIcon}></span>
          <span className={styles.navbarIcon}></span>
          <span className={styles.navbarIcon}></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
