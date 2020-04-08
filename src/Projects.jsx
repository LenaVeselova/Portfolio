import React from 'react';
import styles from './Projects.module.css';
import Project from "./Project";

const Projects = (props) => {
    return (
        <div className={styles.projects}>
            <div className={styles.container}>
                <h2>Мои проекты</h2>
                <div className={styles.myProjects}>
                    <Project title='First project' name='Site'/>
                    <Project title='Second project' name='App'/>
                    <Project title='Third project' name='Another App'/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
