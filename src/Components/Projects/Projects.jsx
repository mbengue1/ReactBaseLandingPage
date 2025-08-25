// Imports
import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import { MLThumb, SWEBlogAppThumb, RocketThumb, ProjectNeptuneImage, JobApplicationLoggerImage, IncidentResponseImage } from '../../assets/index';

//projects
const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={MLThumb}
          h3="Breast Cancer ML Model"
          projectId="breast-cancer-ml-model"
          tools={['Python', 'Flask', 'React', 'Machine Learning', 'Logistic Regression']}
        />
        <ProjectCard
          src={SWEBlogAppThumb}
          h3="Full Stack SWE Blog App"
          projectId="swe-blog-app"
          tools={['Node.js', 'Express', 'React', 'MongoDB', 'Cloudinary']}
        />
        <ProjectCard
          src={RocketThumb}
          h3="2D Rocket Traveler Game"
          projectId="2d-rocket-game"
          tools={['Java', 'Game Engine']}
        />
        <ProjectCard
          src={ProjectNeptuneImage}
          h3="Neptune Sportsbook - AI-Enhanced Sports Betting Platform"
          projectId="neptune-sportsbook"
          tools={['React Native', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'AI/ML']}
        />
        <ProjectCard
          src={IncidentResponseImage}
          h3="AI-Powered Incident Response System"
          projectId="ai-incident-response"
          tools={['TypeScript', 'Express.js', 'WebSockets', 'React', 'MongoDB', 'Redis', 'AI/ML']}
        />
        <ProjectCard
          src={JobApplicationLoggerImage}
          h3="Job Application Auto-Logger (Google Apps Script)"
          projectId="job-application-autologger"
          tools={['Google Apps Script', 'JavaScript', 'Gmail API', 'Google Sheets API']}
        />
      </div>
    </section>
  );
};

export default Projects;
