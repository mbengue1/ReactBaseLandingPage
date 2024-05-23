
//IMPORTS
import React from 'react';
import styles from './SkillsStyles.module.css';
import SkillList from '../../common/SkillList';
import { checkMark } from '../../assets';

function Skills() {
    return (
        //Skills
      <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Languages</h1>
        <div className={styles.skillList}>
          <SkillList src={checkMark} skill="HTML" />
          <SkillList src={checkMark} skill="CSS" />
          <SkillList src={checkMark} skill="JavaScript" />
          <SkillList src={checkMark} skill="TypeScript" />
          <SkillList src={checkMark} skill="Node.JS" />
        </div>
        <hr />
        <div className={styles.skillList}>
          <SkillList src={checkMark} skill="Java" />
          <SkillList src={checkMark} skill="React" />
          <SkillList src={checkMark} skill="Vue" />
          <SkillList src={checkMark} skill="Tailwind CSS" />
        </div>
        <hr />
        <div className={styles.skillList}>
          <SkillList src={checkMark} skill="Redux" />
          <SkillList src={checkMark} skill="Webpack" />
          <SkillList src={checkMark} skill="Git" />
          <SkillList src={checkMark} skill="CRUD" />
          <SkillList src={checkMark} skill="Bootstrap" />
        </div>
      </section>
    );
  }
  
  export default Skills;
