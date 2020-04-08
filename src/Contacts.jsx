import React from 'react';
import styles from './Contacts.module.css';

const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <div className={styles.container}>
                <h2>Напиши мне</h2>
                <form action="">
                    <input type="text" placeholder='Имя'/>
                    <input type="email" placeholder='E-mail'/>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Сообщение'></textarea>
                </form>
                <button>Отправить</button>
            </div>
        </div>
    );
}

export default Contacts;