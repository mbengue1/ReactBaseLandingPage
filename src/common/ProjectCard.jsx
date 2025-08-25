
// ProjectCard
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ src, h3, tools, projectId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <div className={styles.projectCard} onClick={handleClick}>
      <img src={src} alt={`${h3} project thumbnail`} />
      <h3>{h3}</h3>
      <div className={styles.toolsContainer}>
        {tools.map((tool, index) => (
          <span key={index} className={styles.tool}>
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  src: PropTypes.string.isRequired,
  h3: PropTypes.string.isRequired,
  tools: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectId: PropTypes.string.isRequired,
};

export default ProjectCard;
