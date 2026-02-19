import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

interface FooterProps {
  name: string;
  year?: number;
}

export default function Footer({ name, year = new Date().getFullYear() }: FooterProps): JSX.Element {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <button
          type="button"
          className={styles.scrollButton}
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <svg width="24" height="64" viewBox="0 0 24 56" aria-hidden="true">
            <line x1="12" y1="44" x2="12" y2="12" stroke="currentColor" strokeWidth="2" />
            <path d="M6 18l6-6 6 6" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>

        <div className={styles.copyright}>
          © {name} {year}
        </div>

        <Link className={styles.legalLink} to="/legal">
          Legal notice
        </Link>
      </div>
    </footer>
  );
}
