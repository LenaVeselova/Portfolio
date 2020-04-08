import React from 'react';
import styles from './Skill.module.css';

const Skill = (props) => {
  return (
    <div className={styles.skill}>
        {props.name}
    </div>
  );
}

export default Skill;
