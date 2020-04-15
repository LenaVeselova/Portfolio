import React from 'react';
import styles from './Project.module.css';

const Project = props => {
  return (
    <div className={styles.project}>
        <img src={props.image}/>
      {/*  */}
      {/*<h3>{props.title}</h3>*/}
      {/*  {props.name}*/}
    </div>
  );
}

export default Project;
