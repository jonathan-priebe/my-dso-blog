import React, { useState } from 'react';
import styles from './styles.module.css';

export default function Contact(): JSX.Element {
  const [isExpanded, setIsExpanded] = useState(false);
  const mailIcon = '/img/portfolio/contact-me/Mail-icon.svg';
  const linkedinIcon = '/img/portfolio/contact-me/Linked-In-icon.svg';

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <h2 className={styles.sectionTitle}>
          Contact M
          <span
            className={styles.clickableE}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            e
          </span>
        </h2>

        {!isExpanded ? (
          // Compact View
          <div className={styles.compactView}>
            <div className={styles.left}>
              <ul className={styles.list}>
                <li>
                  I'm always excited to connect about new opportunities and collaborations in web development and IT security.
                </li>
                <li>
                  Feel free to reach out if you're looking for a dedicated developer ready to contribute, learn, and grow with your team.
                </li>
              </ul>
            </div>

            <div className={styles.right}>
              <p className={styles.subtitle}>
                Looking forward to hearing from you!
              </p>
              <div className={styles.contactInfo}>
                <a
                  href="mailto:jonathan.priebe@gmx.de"
                  className={styles.contactItem}
                >
                  <img src={mailIcon} alt="Email" />
                  jonathan.priebe@gmx.de
                </a>
                <a
                  href="https://www.linkedin.com/in/jonathan-priebe25/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactItem}
                >
                  <img src={linkedinIcon} alt="LinkedIn" />
                  Profile Page
                </a>
              </div>
            </div>
          </div>
        ) : (
          // Expanded View (current design)
          <>
            <p className={styles.subtitle}>
              Looking forward to hearing from you!
            </p>

            <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📧</div>
              <div className={styles.infoText}>
                <h3>Email</h3>
                <a href="mailto:jonathan.priebe@gmx.de">jonathan.priebe@gmx.de</a>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>💼</div>
              <div className={styles.infoText}>
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/jonathan-priebe25/" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/jonathan-priebe25
                </a>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>🐙</div>
              <div className={styles.infoText}>
                <h3>GitHub</h3>
                <a href="https://github.com/jonathan-priebe" target="_blank" rel="noopener noreferrer">
                  github.com/jonathan-priebe
                </a>
              </div>
            </div>
          </div>

          <div className={styles.contactForm}>
            <h3>Send me a message</h3>
            <form>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className={styles.formInput}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  placeholder="Your Email"
                  className={styles.formInput}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <textarea
                  placeholder="Your Message"
                  className={styles.formTextarea}
                  rows={5}
                  required
                ></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>
        </div>
          </>
        )}
      </div>
    </section>
  );
}
