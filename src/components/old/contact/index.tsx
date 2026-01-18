import React from 'react';
import styles from './styles.module.css';

export default function Contact(): JSX.Element {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <h2 className={styles.sectionTitle}>Contact Me</h2>
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
      </div>
    </section>
  );
}
