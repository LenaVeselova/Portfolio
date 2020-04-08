import React from 'react';
import styles from './Skills.module.css';
import Skill from "./Skill";

const Skills = () => {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <h2>Мои скилы</h2>
                <div className={styles.mySkills}>
                    <Skill name='HTML, CSS'/>
                    <Skill name='JS'/>
                    <Skill name='REACT'/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
