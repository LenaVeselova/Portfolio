import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <span>Лена Веселова</span>
                <div className={styles.social}>
                    <ul>
                        <li>Vkontacte</li>
                        <li>Facebook</li>
                        <li>Instagramm</li>
                        <li>Pinterest</li>
                    </ul>
                </div>
                <span>&copy; Все права защищены</span>
            </div>
        </div>
    );
}

export default Footer;
