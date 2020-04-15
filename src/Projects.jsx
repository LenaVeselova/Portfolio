import React from 'react';
import styles from './Projects.module.css';
import Project from "./Project";

const Projects = (props) => {
    return (
        <div className={styles.projects}>
            <div className={styles.container}>
                <h2>Мои проекты</h2>
                <div className={styles.myProjects}>
                    <Project title='First project' name='Site' image='https://i.pinimg.com/564x/d1/5e/97/d15e97bad297c2039dd58e2f35c3730a.jpg'/>
                    <Project title='Second project' name='App' image='https://i.pinimg.com/564x/dd/ec/57/ddec57d16559cb6d62bb323fc150350a.jpg'/>
                    <Project title='Third project' name='Another App' image='https://i.pinimg.com/564x/81/7c/af/817caf4797072c01aa37c82e1b345fb5.jpg'/>
                    <Project title='Fourth project' name='Another App' image='https://i.pinimg.com/564x/0d/13/88/0d13889b03130776349af14564086606.jpg'/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
