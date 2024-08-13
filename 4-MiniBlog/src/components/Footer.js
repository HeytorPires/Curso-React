import React from 'react';

//CSS
import styles from './Footer.module.css';
const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <h3>Escreva sobre o que você tem interesse!</h3>
        <p>Mini Blog &copy; 2024</p>
      </footer>
    </div>
  );
};

export default Footer;
