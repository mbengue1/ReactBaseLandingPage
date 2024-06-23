// Imports
import React from 'react';
import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import { Link } from 'react-router-dom';
import { tempImg, MLThumb } from '../../assets/index';

//projects
const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <Link to="/projects/breast-cancer-ml-model">
          <ProjectCard
            src={MLThumb}
            h3="Breast Cancer ML Model"
            p="Learn more here."
          />
        </Link>
        <Link to="/projects/work-in-progress-1">
          <ProjectCard
            src={tempImg}
            h3="Work In Progress 1"
            p="App...."
          />
        </Link>
        <Link to="/projects/work-in-progress-2">
          <ProjectCard
            src={tempImg}
            h3="Work In Progress 2"
            p="App...."
          />
        </Link>
        <Link to="/projects/work-in-progress-3">
          <ProjectCard
            src={tempImg}
            h3="Work In Progress 3"
            p="App...."
          />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
