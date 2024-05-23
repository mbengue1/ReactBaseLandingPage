
/**HEADER**/
//IMPORTS
import React from 'react'
import styles from './HeaderStyles.module.css';
import CV from '../../assets/ResumeMbengueCV.pdf';
import { useTheme } from '../../common/ThemeContext.jsx';
import {CiLight, MdOutlineModeNight, FaLinkedin, 
  FaGithub, MdOutlineMail, heroIMG, twitterLight, 
  twitterDark, linkedInDark, linkedInLight, moon, sun, 
  githubLight, githubDark} from '../../assets/index.js';


function Header() {

    //Theme Switch
    const {theme, toggleTheme} = useTheme();

    //ICONS
    const themeIcon = theme === 'light' ? sun : moon;
    const linkedInIcon = theme === 'light' ? linkedInLight : linkedInDark;
    const gitHubIcon = theme === 'light' ? githubLight : githubDark;
    const contactIcon = theme === 'light' ? MdOutlineMail : MdOutlineMail;




  return (
    <section id = 'hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
            src={heroIMG}
            className={styles.hero}
            alt = 'Profile Headshot Mouhamed Mbengue'
        />
        <img
          src={themeIcon}
          className={styles.colorMode}
          alt='Dark/Light Mode Icon'
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Mouhamed 
          <br/>
          Mbengue
        </h1>
        <h2>CS Student</h2>
        <span>
          <a href='https://github.com/MouhamedMB15' target='_blank'>
            <img src={gitHubIcon}></img>
          </a>
          <a href='https://www.linkedin.com/in/mmbengue0/' target='_blank'>
            <img src={linkedInIcon}></img>
          </a>
          <a href='https://github.com/MouhamedMB15' target='_blank'>
            <img src={gitHubIcon}></img>
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>

      </div>
    </section>
  )
}

export default Header
