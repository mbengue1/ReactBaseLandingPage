
// Imports
import React from 'react';
import { useParams } from 'react-router-dom';
import { MLThumb, tempImg, SWEBlogAppThumb, BlogSlides } from '../../assets'; 
import styles from './projectdetails.module.css'; 

const projectsData = {
  "breast-cancer-ml-model": {
    title: "Breast Cancer Tumor Prediction Model",
    description: `
      This project is a machine learning application designed to predict whether a breast cancer tumor is malignant or benign based on numerous distinct various input features. The model is built using Logistic Regression and is trained on a dataset of breast cancer cases.

      Cases and dataset utilized from the Kaggle Dataset from the Breast Cancer Wisconsin Diagnostics. 

      The application consists of a backend server implemented with Flask and a frontend web application built with React JS. Additionally built upon python Jupyter libraries.

      The application leverages Logistic Regression with hyperparameter tuning via RandomizedSearchCV to ensure the best model for the user. For scalability, both the model and scaler are saved and loaded using Joblib, facilitating efficient predictions. The frontend is a responsive web application built with React JavaScript, ensuring compatibility across mobile, tablet, and desktop platforms. Additionally, RESTful API is provided to handle prediction requests seamlessly.
    
      `,
    repoLink: "https://github.com/MouhamedMB15/BreastCancerML",
    projectLink: 'https://mlbreastcancermodel.netlify.app',
    image: MLThumb,
  },
  "swe-blog-app": {
    title: "Full Stack SWE Blog App",
    description: `
      This project is a full-stack application designed to provide a blogging platform with robust features and a responsive design. The application utilizes Node.js, Express.js, React, and MongoDB, implementing a CRUD (Create, Read, Update, Delete) architecture to manage blog content efficiently. Additionally, built off scratch multiple rest API's.

      Key Features:
      - **User Authentication**: Users can sign up, create an account, and log in to the application.
      - **Blog Creation and Management**: Authenticated users can create new blogs, including adding image files for their blog thumbnails. They can edit or delete their own blogs and view all their blogs.
      - **Responsive Design**: The website features a responsive design with a dark mode option, ensuring a seamless user experience across mobile, tablet, and desktop platforms.
      - **Category Filtering**: Users can filter blogs by categories when searching for specific content. Users can also select a category when creating a new blog.
      - **Profile Management**: Users can edit their profiles to update personal information.
      - **Blog Viewing**: All users, including those not logged in, can view blogs and the profiles of the blog authors. Logged-out users do not have the ability to edit or delete blogs created by others.

      This project showcases the integration of frontend and backend technologies to create a functional and user-friendly web application. The backend, implemented with Node.js and Express.js, handles the application logic and database interactions. The frontend, built with React, provides a modern and interactive user interface.

      The database used is MongoDB, ensuring scalability and flexibility in data management. The application also integrates Cloudinary for handling image uploads efficiently.
    `,
    repoLink: "https://github.com/MouhamedMB15/SWEBlogApplication",
    projectLink: BlogSlides,
    image: SWEBlogAppThumb,
  },
  "work-in-progress-2": {
    title: "Work In Progress 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae ligula at tortor fermentum consequat. Sed efficitur purus non vehicula sodales. Nam vel ligula ac nulla blandit consectetur. Ut vehicula, sapien a pretium auctor, ex nulla sagittis urna, id venenatis tortor lectus nec turpis. Integer sit amet augue vitae nulla tristique auctor. Fusce fermentum, nulla at malesuada pellentesque, elit sapien pretium nisl, eget commodo justo eros et nulla. Donec varius justo et libero aliquam, ut suscipit magna ullamcorper.",
    repoLink: "https://github.com/MouhamedMB15/",
    projectLink: "https://github.com/MouhamedMB15/",
    image: tempImg,
  },
  "work-in-progress-3": {
    title: "Work In Progress 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae ligula at tortor fermentum consequat. Sed efficitur purus non vehicula sodales. Nam vel ligula ac nulla blandit consectetur. Ut vehicula, sapien a pretium auctor, ex nulla sagittis urna, id venenatis tortor lectus nec turpis. Integer sit amet augue vitae nulla tristique auctor. Fusce fermentum, nulla at malesuada pellentesque, elit sapien pretium nisl, eget commodo justo eros et nulla. Donec varius justo et libero aliquam, ut suscipit magna ullamcorper.",
    repoLink: "https://github.com/MouhamedMB15/",
    projectLink: "https://github.com/MouhamedMB15/",
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
