// Imports
import React from 'react';
import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import { Link } from 'react-router-dom';
import { tempImg, MLThumb, SWEBlogAppThumb, RocketThumb } from '../../assets/index';

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
            link="https://github.com/MouhamedMB15/BreastCancerML"
            tools={['Python', 'Flask', 'React', 'Machine Learning', 'Logistic Regression']}
          />
        </Link>
        <Link to="/projects/swe-blog-app">
          <ProjectCard
            src={SWEBlogAppThumb}
            h3="Full Stack SWE Blog App"
            link="https://github.com/MouhamedMB15/SWEBlogApplication"
            tools={['Node.js', 'Express', 'React', 'MongoDB', 'Cloudinary']}
          />
        </Link>
        <Link to="/projects/2d-rocket-game">
          <ProjectCard
            src={RocketThumb}
            h3="2D Rocket Traveler Game"
            link="https://github.com/MouhamedMB15/Java-Rocket-Game"
            tools={['Java', 'Game Engine']}
          />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
