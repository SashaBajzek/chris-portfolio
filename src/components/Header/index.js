import React from 'react';
import styles from './Header.scss';
import MenuIcon from '../MenuIcon';
import Typist from 'react-typist';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <MenuIcon />
      <h1 className={styles.heading}>
        <span className={styles.span}>My name is <strong className={styles.strong}>Chris Ragsdale</strong> and I am </span>
        <Typist cursor={{hideWhenDone: true }} className={styles.carousel}>
          a Futurist.
          <Typist.Backspace count={11} delay={1500} />
          <Typist.Delay ms={750} />
          an Optimist.
          <Typist.Backspace count={12} delay={1500} />
          <Typist.Delay ms={750} />
          an Engineer.
        </Typist>
      </h1>
    </div>
  </header>
);

export default Header;