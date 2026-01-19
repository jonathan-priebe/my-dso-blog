import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function Hero(): JSX.Element {
  const profileImage = useBaseUrl('/img/portfolio/jp_pic.jpg');

  return (
    <section className={styles.heroBanner}>
      <div className={styles.heroContainer}>
        <div className={styles.heroMain}>
          <div className={styles.heroTextContainer}>
            <div className={styles.heroText1}>
                <h2 className={styles.greeting}>Hey there. 👋 I am</h2>
                <h1 className={styles.name}>Jonathan Priebe</h1>
                <p className={styles.title} style={{ marginBottom: '0px' }}>Full Stack Developer & DevSecOps Engineer</p>
            </div>
            <div className={styles.heroText2}>
                <p className={styles.description}>
                  I am a passionate developer with expertise in building modern web applications
                  and implementing secure DevOps practices. I love creating efficient solutions
                  and learning new technologies.
                </p>
                <div className={styles.heroCta}>
                  <Link
                    className={styles.ctaButton}
                    to="#contact">
                    Contact Me
                  </Link>
                </div>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img
              src={profileImage}
              alt="Jonathan Priebe"
              className={styles.profileImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
