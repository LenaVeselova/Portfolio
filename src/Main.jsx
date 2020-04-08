import React from 'react';
import styles from './Main.module.css';

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.greeting}>
          <span>Привет!</span>
          <span>Меня зовут Лена Веселова</span>
          <span>Я front-end разработчик</span>
        </div>
        <div className={styles.photo}>
          <img src="" alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Main;
