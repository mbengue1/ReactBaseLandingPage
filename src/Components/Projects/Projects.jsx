// Imports
import React from 'react';
import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import { Link } from 'react-router-dom';
import { tempImg, MLThumb, SWEBlogAppThumb } from '../../assets/index';

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
        <Link to="/projects/work-in-progress-2">
          <ProjectCard
            src={tempImg}
            h3="Work In Progress 2"
            link="#"
            tools={['Tool 1', 'Tool 2']}
          />
        </Link>
        <Link to="/projects/work-in-progress-3">
          <ProjectCard
            src={tempImg}
            h3="Work In Progress 3"
            link="#"
            tools={['Tool 3', 'Tool 4']}
          />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
