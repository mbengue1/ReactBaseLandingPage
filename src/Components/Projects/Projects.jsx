
//Imports
import React from 'react';
import ProjectCard from '../../common/ProjectCard';
import styles from './ProjectsStyles.module.css';
import {tempImg} from '../../assets/index';


//Projects
function Projects() {
    return (
      <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            
          <ProjectCard
            src={tempImg}
            link="https://github.com/Ade-mir/company-landing-page-2"
            h3="Work In Progress"
            p="App...."
          />
          <ProjectCard
            src={tempImg}
            link="https://github.com/Ade-mir/company-landing-page-2"
            h3="Work In Progress"
            p="App...."
          />
          <ProjectCard
            src={tempImg}
            link="https://github.com/Ade-mir/company-landing-page-2"
            h3="Work In Progress"
            p="App...."
          />
          <ProjectCard
            src={tempImg}
            link="https://github.com/Ade-mir/company-landing-page-2"
            h3="Work In Progress"
            p="App...."
          />
        </div>
      </section>
    );
  }

export default Projects;
