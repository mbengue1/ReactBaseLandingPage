
//IMPORTS
import React from 'react';
import styles from './SkillsStyles.module.css';
import SkillList from '../../common/SkillList';


function Skills() {
    return (
        //Skills
      <section id="skills" className={styles.container}>
        {/**Main Languages**/}
        <h1 className="sectionTitle">Languages</h1>
        <div className={styles.skillList}>
          <SkillList  skill="HTML" />
          <SkillList skill="CSS" />
          <SkillList skill="JavaScript" />
          <SkillList skill="Java" />
          <SkillList skill="Python" />
        </div>
        <hr />
        {/**Tools**/}
        <div className={styles.skillList}>
          <SkillList skill="React JS" />
          <SkillList skill="Bootstrap" />
          <SkillList skill="CRUD" />
          <SkillList skill="Tailwind CSS" />
        </div>
        <hr />
        {/**Extra**/}
        <div className={styles.skillList}>
          <SkillList skill="Git" />
          <SkillList skill="Github" />
        </div>
      </section>
    );
  }
  
  export default Skills;
