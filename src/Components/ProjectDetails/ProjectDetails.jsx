
// Imports
import { useParams } from 'react-router-dom';
import { MLThumb, SWEBlogAppThumb, BlogSlides, RocketThumb, ProjectNeptuneImage, JobApplicationLoggerImage, IncidentResponseImage } from '../../assets'; 
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
  "neptune-sportsbook": {
    title: "Neptune Sportsbook - AI-Enhanced Sports Betting Platform",
    description: `
      Neptune Sportsbook is a modern, AI-powered sports betting application built with React Native and real-time odds integration. Our platform combines live sports data with intelligent insights to help users make informed betting decisions.

      The application currently operates as an MVP with real-time odds integration and a complete mock betting flow. We've successfully integrated with The Odds API to provide live odds for multiple sports including Soccer, Football, Basketball, Hockey, and Tennis, covering major leagues and tournaments worldwide. The platform features a comprehensive bet selection and management system with an intuitive interface designed for mobile-first experiences.

      Our tech stack leverages React Native with TypeScript for cross-platform mobile development, supported by Expo for streamlined development and deployment. The backend is built with Node.js and Express, providing a robust REST API for data management. We use MongoDB for user data and session management, while Firebase handles secure authentication and real-time features. The application implements React Context and custom hooks for efficient state management, ensuring smooth performance across all devices.

      The next phase of development focuses on AI enhancement, including an intelligent chat assistant for sports insights and recommendations, machine learning models for bet recommendations and risk assessment, and advanced analytics for statistical analysis. We're also planning to integrate real-time score updates, push notifications, and payment processing capabilities to create a comprehensive sports betting experience.

      This project demonstrates the integration of modern mobile development technologies with real-time data APIs and AI/ML capabilities, creating a comprehensive sports betting platform that goes beyond traditional sportsbooks. The combination of real-time data, intelligent insights, and a seamless mobile experience positions Neptune Sportsbook as a next-generation platform in the sports betting industry.
    `,
    repoLink: "https://github.com/your-username/Project_Neptune",
    projectLink: "https://github.com/your-username/Project_Neptune",
    image: ProjectNeptuneImage,
  },
  "ai-incident-response": {
    title: "AI-Powered Incident Response System",
    description: `
      Our AI-Powered Incident Response System is a real-time, AI-assisted incident management platform that triages alerts, notifies engineers, and tracks incidents through a comprehensive microservices architecture. Built with TypeScript, Express.js, WebSockets, and integrated with GPT-3.5, this system provides a modern dashboard UI that empowers engineering and DevOps teams to detect, analyze, and resolve incidents faster than ever before.

      The platform excels in real-time incident ingestion, seamlessly connecting to popular monitoring tools such as Datadog, Prometheus, AWS CloudWatch, and others through APIs or Webhooks. When incidents occur, our AI-powered triage service immediately springs into action, using advanced language models to summarize alerts, assign appropriate severity levels, and suggest targeted remediation steps. This intelligent automation significantly reduces the time engineers spend on initial incident assessment, allowing them to focus on resolution.

      Communication is handled through WebSocket notifications, ensuring engineers receive live incident updates through dedicated channels with sophisticated escalation policies. The system supports multiple notification methods including Slack, Email, SMS, and PagerDuty-style workflows, ensuring critical alerts reach the right people at the right time. The incident tracking dashboard, built with React and TypeScript, provides real-time updates, comprehensive incident timelines, and AI-generated summaries that give teams complete visibility into ongoing issues.

      Security and access control are managed through a robust Role-Based Access Control system, where administrators can manage team assignments and incident ownership while engineers only see incidents relevant to their role and team. The platform also includes automated postmortem generation, creating detailed post-incident reports with AI-summarized root cause analysis that can be exported to PDF or Markdown formats for compliance and auditing purposes.

      Our tech stack is built for scalability and reliability, featuring Express.js with TypeScript for the backend, WebSocket support for real-time communications, and integration with OpenAI's GPT API with intelligent fallback modes. Data is stored in MongoDB for incident and user management, while Redis handles caching and WebSocket session management. The entire system is containerized with Docker and orchestrated through Kubernetes, with comprehensive CI/CD pipelines through GitHub Actions and deployment on AWS infrastructure including EKS, RDS, S3, and CloudWatch.

      The current implementation includes the core platform with real-time WebSocket notifications, AI-powered incident triage, and a comprehensive dashboard with incident timeline tracking. Our roadmap includes integrations with popular collaboration tools like Slack, PagerDuty, and Jira, as well as multi-region deployment with failover capabilities for enterprise-grade reliability. This system represents the future of incident management, combining the speed of automation with the intelligence of AI to create a platform that not only responds to incidents but learns from them to prevent future occurrences.
    `,
    repoLink: "https://github.com/mbengue1/ai-incident-response-system",
    projectLink: "https://github.com/mbengue1/ai-incident-response-system",
    image: IncidentResponseImage,
  },
  "job-application-autologger": {
    title: "Job Application Auto-Logger (Google Apps Script)",
    description: `
      The Job Application Auto-Logger is an intelligent automation tool built with Google Apps Script that eliminates the manual work of tracking job applications by parsing confirmation emails from Gmail and automatically organizing them into a comprehensive Google Sheets tracker. This tool operates entirely within your Google ecosystem, requiring no external APIs or servers, making it both secure and cost-effective.

      The system works by intelligently searching Gmail for application confirmation emails using sophisticated query patterns that capture various ATS system formats. It searches for phrases like "application received," "job application submitted," "we received your application," and many other variations that different companies and systems use. Once found, the script parses each email thread to extract key information including the role title, company name, application term, location, and date applied.

      One of the most powerful features is its intelligent de-duplication system, which uses Gmail Thread ID as the primary key and role-company combinations as a fallback to prevent duplicate entries. The system doesn't just add new rows; it intelligently updates existing entries when new information becomes available, ensuring your tracker remains current and accurate. This is particularly valuable when you receive follow-up emails or status updates for applications you've already logged.

      The tracker maintains a comprehensive structure with 14 key fields including progress tracking, role details, company information, application term, location, recruiter contact status, interview round tracking, thank you email confirmations, offer status, application date, platform used, and the hidden Thread ID for de-duplication. The system automatically applies formatting to status cells and Yes/No fields, making it easy to quickly assess your application status at a glance.

      Built entirely in JavaScript using Google Apps Script, the tool integrates seamlessly with Gmail and Google Sheets APIs. It processes email content using advanced regex patterns to handle various ATS systems like Workday, Greenhouse, Lever, and others. The automation can be triggered manually or set to run automatically on a schedule, ensuring your tracker stays current without constant manual intervention.

      The current implementation is fully functional with comprehensive email parsing and de-duplication capabilities. Future enhancements include dashboard analytics to visualize your job search progress, per-ATS parsing modules for more robust extraction, and automatic platform detection based on sender domains. This tool transforms the tedious process of manually tracking job applications into an automated, intelligent system that ensures you never miss an application or duplicate an entry while providing comprehensive insights into your job search progress and success patterns.
    `,
    repoLink: "https://github.com/your-username/job-application-autologger",
    projectLink: "https://github.com/your-username/job-application-autologger",
    image: JobApplicationLoggerImage,
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
          <div className={styles.buttonContainer}>
            {project.projectLink && project.projectLink !== project.repoLink && (
              <a href={project.projectLink} className={styles.plink} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            )}
            <a href={project.repoLink} className={styles.link} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
