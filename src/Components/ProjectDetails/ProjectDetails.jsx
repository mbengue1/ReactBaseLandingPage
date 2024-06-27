
// Imports
import React from 'react';
import { useParams } from 'react-router-dom';
import { MLThumb, tempImg, SWEBlogAppThumb, BlogSlides, RocketThumb } from '../../assets'; 
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
  "2d-rocket-game": {
    title: "2D Java Rocket Traveler Game",
    description: `I developed a 2D Rocket Traveler game using Java, designed to provide an engaging and immersive experience for users. In this game, players can select from multiple rocket ships, each with unique designs and attributes, to start their space journey. The game allows free movement in any direction, offering a sense of exploration and adventure as users navigate through space.

The core gameplay involves shooting and destroying asteroids, which serve as dynamic obstacles. This not only adds a layer of challenge but also keeps the gameplay exciting and fast-paced. As the more asteroids are deleted the more are spawned and duplicated randomly among the users screen. Players must skillfully maneuver their rocket ships to avoid collisions while targeting and eliminating asteroids to score points.

To enhance the user experience, the game features smooth controls, ensuring that players can easily navigate their ships and react quickly to the changing environment. The graphical elements are designed to be visually appealing, with vibrant space backgrounds, detailed rocket ships, and realistic asteroid movements.

Additionally, the game includes various levels of difficulty, catering to both casual gamers and those seeking a more challenging experience. The progressive increase in difficulty ensures that players remain engaged and motivated to improve their skills.

Overall, the 2D Rocket Traveler project showcases the ability to design and develop an interactive and enjoyable gaming experience. It highlights my skills in Java programming, game design, and user interface development, creating a well-rounded and captivating game that appeals to a wide audience.
    `,
    repoLink: "https://github.com/MouhamedMB15/Java-Rocket-Game",
    projectLink: "https://github.com/MouhamedMB15/Java-Rocket-Game",
    image: RocketThumb,
  },
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
