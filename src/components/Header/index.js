import React from 'react';
import styles from './Header.scss';
import MenuIcon from '../MenuIcon';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <MenuIcon />
      <h1 className={styles.heading}>
        <span className={styles.span}>My name is <strong className={styles.strong}>Chris Ragsdale</strong> and I am </span>
        <span className={styles.span}>a Futurist.</span>
        <span className={styles.span}>an Optimist.</span>
        <span className={styles.span}>an Engineer.</span>
      </h1>
    </div>
  </header>
);

export default Header;