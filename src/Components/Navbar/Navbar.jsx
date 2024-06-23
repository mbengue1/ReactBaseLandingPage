// Imports
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './NavbarStyles.module.css';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (event, targetId) => {
    event.preventDefault();
    navigate('/');
    setTimeout(() => {
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <nav>
      <h2 className={styles.title}>Mbengue</h2>

      {/* Nav Bar */}
      <ul className={isOpen ? styles.open : ''}>
        <li><Link to="/">Home</Link></li>
        <li><a href="#about" onClick={(e) => handleNavigation(e, 'about')}>About</a></li>
        <li><a href="#projects" onClick={(e) => handleNavigation(e, 'projects')}>Projects</a></li>
        <li><a href="#skills" onClick={(e) => handleNavigation(e, 'skills')}>Skills</a></li>
        <li><a href="#contact" onClick={(e) => handleNavigation(e, 'contact')}>Contact</a></li>
      </ul>

      {/* Hamburger Menu */}
      <div className={styles.menu} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
