import React, { useState, useRef, useEffect } from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function Hero(): JSX.Element {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const closeIcon = useBaseUrl('/img/portfolio/mobile/close.svg');
    const menuIcon = useBaseUrl('/img/portfolio/mobile/menu_mob.svg');

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                mobileMenuOpen &&
                menuRef.current &&
                buttonRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [mobileMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < lastScrollY || currentScrollY < 10) {
                // Scrolling up or at top - show navbar
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
                // Scrolling down - hide navbar
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

  return (
    <section className={styles.heroBanner}>
      <nav className={`${styles.heroNavbar} ${isVisible ? styles.navbarVisible : styles.navbarHidden}`}>
        <div className={styles.navbarContainer}>
          <button
            ref={buttonRef}
            className={styles.mobileMenuButton}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
                <img src={closeIcon} alt="close menu" />
            ) : (
                <img src={menuIcon} alt="open menu" />
            )}
          </button>
          <div ref={menuRef} className={`${styles.heroNav} ${mobileMenuOpen ? styles.heroNavOpen : ''}`}>
            <Link to="/" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>About me</Link>
            <Link to="#skills" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>My skills</Link>
            <Link to="#projects" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>My projects</Link>
            <Link to="#contact" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      </nav>
    </section>
  );
}