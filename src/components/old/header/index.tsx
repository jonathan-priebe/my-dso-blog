import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link to="/" className={styles.logo}>
          DevSecOps
        </Link>
        <button className={styles.menuButton} aria-label="Toggle menu">
          ☰
        </button>
      </div>
    </header>
  );
}
