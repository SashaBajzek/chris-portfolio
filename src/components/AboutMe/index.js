import React from 'react';
import styles from './AboutMe.scss';
import profile from './ChrisProfilePic.jpg';
import ArrowSlim from '../ArrowSlim';
import linkedInLogo from './In-White-54px-TM.png';
import facebookLogo from './FB-f-Logo__white_50.png';
import emailLogo from './email-64.png';

const AboutMe = () => (
  <div className={styles.AboutMe}>
    <h2 className={styles.heading}>Welcome!</h2>
    <ArrowSlim />
    <img className={styles.profileImage} src={profile} alt='Chris smiling profile' />
    <section className={styles.section}>
      <div className={styles.container}>
        <p>
          <span className={styles.key}>Name: </span>Christopher Ragsdale
        </p>
        <p>
          <span className={styles.key}>Occupation: </span>Mechanical & Aerospace Engineer
        </p>
        <p>
          <span className={styles.key}>Employer: </span>Spectrum Technology Group, Inc.
        </p>
        <p>
          <span className={styles.key}>Interests: </span>Space, Space Systems Design, Space Colonization, Space Commercialization,
          Advanced Technology & Applications, the Future, the Past, Science Fiction, Science Fact (& Theories), Engineering Methodology, Materials Science, Entrepreneurship.
        </p>
        <p>
          <span className={styles.key}>Hobbies: </span>Learning, Electronics Design & Fabrication, Attending Space Events, Computer Building & Gaming.
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a className={styles.link}href='https://www.linkedin.com/in/thefuturist/'>
              <img className={styles.linkImage} src={linkedInLogo} alt='LinkedIn'/>
            </a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.link} href='mailto:chris.s.ragsdale@gmail.com'>
              <img className={styles.linkImage} src={emailLogo} alt='Email'/>
            </a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.link} href='https://www.facebook.com/Chris415hi'>
              <img className={styles.linkImage} src={facebookLogo} alt='Facebook'/>
            </a>
          </li>
        </ul>
          
      </div>
    </section>
    <section className={[styles.section, styles.sectionMoreInfo].join(' ')}>
      <div className={styles.container}>
        <p>
          I'm clearly very interested in space technology and, well, technology in general. I enjoy exploring and discovering interesting ways different technologies and modes of thinking can be combined to create new and wonderous things. Those combinations tend to be most prevalent in the most extreme environments (space being a good example).
        </p>
        <p>
          While my passion is outer space, the environment where I currently get to put my designs to the test isn't beyond the clouds, but rather beneath the waves.
        </p>
      </div>
      <div className={styles.submarineImage}></div>
      <div className={styles.container}>
        <p>
          I currently live in San Francisco, California with my amazing wife <a href="https://www.sashabajzek.com" className={styles.linkText}>Sasha</a>. I have had the distinct pleasure of living in quite a few parts of the United States throughout my life (most of them during my childhood).
        </p>
        <p>
          Some of the places I have called home over the years are:
        </p>
        <ul>
          <li>Mount Airy, Maryland</li>
          <li>Chicago, Illinois</li>
          <li>Honolulu, Hawaii</li>
          <li>Landover, Maryland</li>
          <li>Groton, Connecticut</li>
          <li>New Port News, Virginia</li>
        </ul>
      </div>
      <div className={styles.earthImage}></div>
    </section>
  </div>
);

export default AboutMe;