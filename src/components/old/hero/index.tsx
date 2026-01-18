import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function Hero(): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className={styles.heroBanner}>
      <nav className={styles.heroNavbar}>
        <div className={styles.navbarContainer}>
          <button
            className={styles.mobileMenuButton}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
          <div className={`${styles.heroNav} ${mobileMenuOpen ? styles.heroNavOpen : ''}`}>
            <Link to="/" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>About Me</Link>
            <Link to="#skills" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>My Skills</Link>
            <Link to="#projects" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>My Projects</Link>
            <Link to="#contact" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      </nav>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.heroMain}>
            <div className={styles.heroText}>
              <h2 className={styles.greeting}>Hello, I'm</h2>
              <h1 className={styles.name}>Jonathan Priebe</h1>
              <p className={styles.title}>Full Stack Developer & DevSecOps Engineer</p>
              <p className={styles.description}>
                I am a passionate developer with expertise in building modern web applications
                and implementing secure DevOps practices. I love creating efficient solutions
                and learning new technologies.
              </p>
              <Link
                className={styles.ctaButton}
                to="#contact">
                Contact Me
              </Link>
            </div>
            <div className={styles.heroImage}>
              <img
                src="https://www.pngkey.com/png/full/73-730434_04-dummy-avatar.png"
                alt="Jonathan Priebe"
                className={styles.profileImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
