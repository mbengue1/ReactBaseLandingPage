
//Imports
import React from 'react';
import ProjectCard from '../../common/ProjectCard';
import styles from './ProjectsStyles.module.css';
import {viberr, hipsster, fitlift, freshBurger} from '../../assets/index'

//Projects
function Projects() {
    return (
      <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            
          <ProjectCard
            src={viberr}
            link="https://github.com/Ade-mir/company-landing-page-2"
            h3="Viberr"
            p="Streaming App"
          />
          <ProjectCard
            src={freshBurger}
            link="https://github.com/Ade-mir/company-landing-page-2"
            h3="Fresh Burger"
            p="Hamburger Restaurant"
          />
          <ProjectCard
            src={hipsster}
            link="https://github.com/Ade-mir/company-landing-page-2"
            h3="Hipsster"
            p="Glasses Shop"
          />
          <ProjectCard
            src={fitlift}
            link="https://github.com/Ade-mir/company-landing-page-2"
            h3="FitLift"
            p="Fitness App"
          />
        </div>
      </section>
    );
  }

export default Projects
