
//Imports
import React from 'react';
//Project Card
const ProjectCard = ({src, link, h3, p}) => {
  return (
   <a href = {link} target = "_blank">
    <img className='hover' src={src} alt={`${h3} Logo Icon`}></img>
    <h3>{h3}</h3>
    <p>{p}</p>
   </a>
  );
}

export default ProjectCard;
