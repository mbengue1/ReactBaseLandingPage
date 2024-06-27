

//Imports
import React from 'react';
import styles from './AboutStyles.module.css';
//react icons
import { FaUniversity, FaBook } from 'react-icons/fa';
import { IoMdSchool } from "react-icons/io";
import { MdOutlineWorkOutline } from "react-icons/md";
import { TbSchool } from "react-icons/tb";
import { useTheme } from '../../common/ThemeContext';



//About Me
function AboutMe() {

  //theme
  const { theme } = useTheme(); 
  const iconColor = theme === 'light' ? '#000' : '#fff';

  return (
    <section className={styles.container} id='about'>
      <h1 className={styles.heading}>About Me</h1>
      <div className={styles.aboutDetailsContainer}>
        <div className={styles.detailsContainer}>
          <MdOutlineWorkOutline style={{ fontSize: '2rem', color: iconColor }} />
          <h3>Experience</h3>
          <p className={styles.rtext}>3+ years <br/>Software Development</p>
        </div>
        <div className={styles.detailsContainer}>
          <TbSchool style={{fontSize: '2.5rem', color: iconColor}}/>
          <h3>Education</h3>
          <p className={styles.rtext}>University Of Rochester <br/>Computer Science <br/>Bachelors Of Science</p>
      
        </div>

      </div>
      
      
      <p className={styles.text}>
      A student in the computer science program at the University of Rochester who is extremely motivated and whose 
      commitment and sense of purpose are evident. My path is not just about getting a degree; it is also about never-endingly 
      seeking out new information and creative ideas. I intend to approach computer science with steadfast resolve and be motivated 
      by a strong love for all things engineering. My dedication extends beyond the classroom; I work closely with classmates 
      on difficult assignments and proactively look for chances to help them expand their horizons. My goal is to make a 
      significant contribution to the field of computer science in addition to academic excellence because I have a clear 
      understanding of how it may change the world.
      </p>
      
      <p className={styles.text}>
        Feel free to reach out to me if you want to connect or collaborate on a project!
      </p>

      
    </section>
  );
}

export default AboutMe;

