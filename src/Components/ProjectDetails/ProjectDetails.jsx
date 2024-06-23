
// Imports
import React from 'react';
import { useParams } from 'react-router-dom';
import { MLThumb, tempImg } from '../../assets'; 
import styles from './projectdetails.module.css'; 

const projectsData = {
  "breast-cancer-ml-model": {
    title: "Breast Cancer Tumor Prediction Model",
    description: `
      This project is a machine learning application designed to predict whether a breast cancer tumor is malignant or benign based on numerous distinct various input features. The model is built using Logistic Regression and is trained on a dataset of breast cancer cases.

      Cases and dataset utilized from the Kaggle Dataset from the Breast Cancer Wisconsin Diagnostics. 

      The application consists of a backend server implemented with Flask and a frontend web application built with React JS. Additionally built upon python Jupyter libraries.

      The application leverages Logistic Regression with hyperparameter tuning via RandomizedSearchCV to ensure the best model for the user. For scalability, both the model and scaler are saved and loaded using Joblib, facilitating efficient predictions. The frontend is a responsive web application built with React JavaScript, ensuring compatibility across mobile, tablet, and desktop platforms. Additionally, a simple RESTful API is provided to handle prediction requests seamlessly.
    
      `,
    repoLink: "https://github.com/MouhamedMB15/BreastCancerML",
    projectLink: 'https://mlbreastcancermodel.netlify.app',
    image: MLThumb,
  },
  "work-in-progress-1": {
    title: "Work In Progress 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae ligula at tortor fermentum consequat. Sed efficitur purus non vehicula sodales. Nam vel ligula ac nulla blandit consectetur. Ut vehicula, sapien a pretium auctor, ex nulla sagittis urna, id venenatis tortor lectus nec turpis. Integer sit amet augue vitae nulla tristique auctor. Fusce fermentum, nulla at malesuada pellentesque, elit sapien pretium nisl, eget commodo justo eros et nulla. Donec varius justo et libero aliquam, ut suscipit magna ullamcorper.",
    repoLink: "https://github.com/MouhamedMB15/",
    image: tempImg,
  },
  "work-in-progress-2": {
    title: "Work In Progress 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae ligula at tortor fermentum consequat. Sed efficitur purus non vehicula sodales. Nam vel ligula ac nulla blandit consectetur. Ut vehicula, sapien a pretium auctor, ex nulla sagittis urna, id venenatis tortor lectus nec turpis. Integer sit amet augue vitae nulla tristique auctor. Fusce fermentum, nulla at malesuada pellentesque, elit sapien pretium nisl, eget commodo justo eros et nulla. Donec varius justo et libero aliquam, ut suscipit magna ullamcorper.",
    repoLink: "https://github.com/MouhamedMB15/",
    image: tempImg,
  },
  "work-in-progress-3": {
    title: "Work In Progress 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae ligula at tortor fermentum consequat. Sed efficitur purus non vehicula sodales. Nam vel ligula ac nulla blandit consectetur. Ut vehicula, sapien a pretium auctor, ex nulla sagittis urna, id venenatis tortor lectus nec turpis. Integer sit amet augue vitae nulla tristique auctor. Fusce fermentum, nulla at malesuada pellentesque, elit sapien pretium nisl, eget commodo justo eros et nulla. Donec varius justo et libero aliquam, ut suscipit magna ullamcorper.",
    repoLink: "https://github.com/MouhamedMB15/",
    image: tempImg,
  }
};

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projectsData[projectId];

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{project.title}</h1>
      <div className={styles.content}>
        <img src={project.image} alt={project.title} className={styles.image} />
        <div className={styles.textContainer}>
          <h3 className={styles.header}>Description</h3>
          <p className={styles.description}>{project.description}</p>
          <a href={project.projectLink} className={styles.plink} target="_blank" rel="noopener noreferrer">
            Use Here
          </a>
          <a href={project.repoLink} className={styles.link} target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
