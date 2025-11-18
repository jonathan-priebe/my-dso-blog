import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} My Developer Blog. Built with Docusaurus.
          </p>
          <div className={styles.socialLinks}>
            <Link to="https://github.com/yourusername" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </Link>
            <Link to="https://www.linkedin.com/in/yourprofile" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </Link>
            {/* Add more social links as needed */}
          </div>
        </div>
      </div>
    </footer>
  );
}
