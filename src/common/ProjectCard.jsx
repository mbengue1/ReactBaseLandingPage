
// ProjectCard
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ src, link, h3, tools }) => {
  return (
    <a href = {link} target = "_blank">
      <img className='hover' src={src} alt={`${h3} Logo Icon`}></img>
      <h3>{h3}</h3>
      <div className={styles.toolsContainer}>
        {tools.map((tool, index) => (
          <span key={index} className={`${styles.tool} ${styles[`tool${index + 1}`]}`}>
            {tool}
          </span>
        ))}
      </div>
    </a>
  );
};

ProjectCard.propTypes = {
  src: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  h3: PropTypes.string.isRequired,
  tools: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectCard;
