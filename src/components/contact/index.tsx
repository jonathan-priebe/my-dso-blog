import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function Contact(): JSX.Element {
  return (
    <section id="contact" className={clsx('hero hero--primary', styles.contactSection)}>
      <div className="container">
        <h2 className="hero__title">Contact Me</h2>
        <p className="hero__subtitle">
          Feel free to reach out to me through the following channels:
        </p>
        <div className={styles.contactInfo}>
          <p>
            <strong>Email:</strong> <a href="mailto:your.email@example.com">your.email@example.com</a>
          </p>
          <p>
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">Your LinkedIn Profile</a>
          </p>
          <p>
            <strong>GitHub:</strong> <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">Your GitHub Profile</a>
          </p>
        </div>
        <div className={styles.contactForm}>
          <h3>Send me a message</h3>
          <form>
            <div className="margin-bottom--md">
              <input type="text" placeholder="Your Name" className="input--lg" required />
            </div>
            <div className="margin-bottom--md">
              <input type="email" placeholder="Your Email" className="input--lg" required />
            </div>
            <div className="margin-bottom--md">
              <textarea placeholder="Your Message" className="textarea--lg" rows={5} required></textarea>
            </div>
            <button type="submit" className="button button--secondary button--lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
