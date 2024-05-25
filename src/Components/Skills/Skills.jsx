
//IMPORTS
import React from 'react';
import styles from './SkillsStyles.module.css';
import SkillList from '../../common/SkillList';
import { checkMark } from '../../assets';

function Skills() {
    return (
        //Skills
      <section id="skills" className={styles.container}>
        {/**Main Languages**/}
        <h1 className="sectionTitle">Languages</h1>
        <div className={styles.skillList}>
          <SkillList src={checkMark} skill="HTML" />
          <SkillList src={checkMark} skill="CSS" />
          <SkillList src={checkMark} skill="JavaScript" />
          <SkillList src={checkMark} skill="Java" />
          <SkillList src={checkMark} skill="Python" />
        </div>
        <hr />
        {/**Tools**/}
        <div className={styles.skillList}>
          <SkillList src={checkMark} skill="React JS" />
          <SkillList src={checkMark} skill="Bootstrap" />
          <SkillList src={checkMark} skill="CRUD" />
          <SkillList src={checkMark} skill="Tailwind CSS" />
        </div>
        <hr />
        {/**Extra**/}
        <div className={styles.skillList}>
          <SkillList src={checkMark} skill="Git" />
          <SkillList src={checkMark} skill="Github" />
        </div>
      </section>
    );
  }
  
  export default Skills;
