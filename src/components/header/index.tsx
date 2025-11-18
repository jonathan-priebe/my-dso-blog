import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

export default function Header(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.header}>
      <div className="container">
        <Link to="/" className={styles.logo}>
          {siteConfig.title}
        </Link>
        <nav className={styles.navbar}>
          <Link to="/docs/intro" className={styles.navbarItem}>
            Docs
          </Link>
          <Link to="/blog" className={styles.navbarItem}>
            Blog
          </Link>
          <Link to="/#contact" className={styles.navbarItem}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
