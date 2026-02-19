import React, { useState, useRef, useEffect } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

interface SkillProps {
  title: string | string[];
  mobileTitle?: string | string[];
  image: string;
  description: string;
  usage: string[];
}

const SkillList: SkillProps[] = [
  {
    title: ['HTML'],
    image: 'img/portfolio/skills/html5_logo.svg',
    description: 'Semantic HTML and modern web standards',
    usage: [ 'User-friendly navigation menus ', 'Responsive web design', 'Contact forms and login pages', 'Transitions, animations and hover effect', ],
  },
  {
    title: ['CSS'],
    image: 'img/portfolio/skills/css_logo.svg',
    description: 'Responsive design and animations',
    usage: [ 'Responsive layouts', 'Animations and transitions', 'Flexbox and Grid', 'Design system styling', ],
  },
  {
    title: ['Static Site', 'Generator'],
    mobileTitle: ['Static', 'Site'],
    image: '/img/docusaurus.png',
    description: 'Static site generation and documentation',
    usage: [ 'Search functionality', 'Static website customization', 'Tags, categories, RSS feeds', 'translation', ],
  },
  {
    title: ['Python'],
    image: 'img/portfolio/skills/python_logo.svg',
    description: 'Backend development and scripting',
    usage: [ 'Build APIs', 'Web frameworks (Django, Flask)', 'Automation scripts', 'Software testing using libraries', ],
  },
  {
    title:['Shell', 'Scripting'],
    image: 'img/portfolio/skills/terminal-2_logo.svg',
    description: 'Package management',
    usage: [ 'Automation of tasks', 'System administration', 'Custom scripts', 'Environment setup', ],
  },
  {
    title: ['YAML'],
    image: 'img/portfolio/skills/Official_YAML_Logo 1.svg',
    description: 'Container orchestration',
    usage: [ 'Configuration files', 'Data serialization', 'CI/CD pipelines', 'Infrastructure as code', ],
  },
  {
    title: ['Container'],
    image: 'img/portfolio/skills/Docker_1_logo.svg',
    description: 'Containerization and deployment',
    usage: [ 'Dockerfile creation', 'Container orchestration', 'Microservices architecture', 'Environment consistency', ],
  },
  {
    title: ['CI/CD with', 'GitHub Actions'],
    mobileTitle: ['CI/CD'],
    image: 'img/portfolio/skills/GitHub_Actions 1_logo.svg',
    description: 'Version control and collaboration',
    usage: [ 'Automated testing', 'Deployment pipelines', 'Linting and formatting', 'Release tagging', ],
  },
  {
    title: ['IT Security'],
    image: 'img/portfolio/skills/it_sec_logo1.svg',
    description: 'Application and infrastructure security',
    usage: [ 'simulate attacks and identify vulnerabilities', 'Setting up multi-factor authentication', 'login security', 'Incident response', ],
  },
];

function Skill({ title, mobileTitle, image, description, usage }: SkillProps) {
  const displayTitle = mobileTitle || title;
  const imageSrc = useBaseUrl(image);

  return (
    <div className={styles.skillCard}>
      <div className={styles.skillFront}>
        <div className={styles.skillIconWrapper}>
          <img
            src={imageSrc}
            alt={Array.isArray(title) ? title.join(' ') : title}
            className={styles.skillImage}
          />
        </div>
        {/* Desktop title */}
        <h3 className={`${styles.skillTitle} ${styles.desktopOnly}`}>
          {Array.isArray(title)
            ? title.map((line, i) => <span key={i}>{line}<br /></span>)
            : title}
        </h3>
        {/* Mobile title */}
        <h3 className={`${styles.skillTitle} ${styles.mobileOnly}`}>
          {Array.isArray(displayTitle)
            ? displayTitle.map((line, i) => <span key={i}>{line}<br /></span>)
            : displayTitle}
        </h3>
      </div>

      <div className={styles.skillBack}>
        <h4 className={styles.skillUsageTitle}>How I used this skill</h4>
        <ul className={styles.skillUsageList}>
          {usage.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function MySkills(): JSX.Element {
  // Group skills into cards of 3 for mobile view
  const skillGroups = [];
  for (let i = 0; i < SkillList.length; i += 3) {
    skillGroups.push(SkillList.slice(i, i + 3));
  }

  const [activeCard, setActiveCard] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.offsetWidth;
      const currentCard = Math.round(scrollLeft / cardWidth);
      setActiveCard(currentCard);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.skillsContainer}>
        <h2 className={styles.sectionTitle}>My Skills</h2>

        {/* Desktop view: normal grid */}
        <div className={styles.skillsGrid}>
          {SkillList.map((props, idx) => (
            <Skill key={idx} {...props} />
          ))}
        </div>

        {/* Mobile view: grouped cards with horizontal scroll */}
        <div className={styles.mobileSkillsWrapper}>
          <div className={styles.skillsScrollContainer} ref={scrollContainerRef}>
            {skillGroups.map((group, groupIdx) => (
              <div key={groupIdx} className={styles.skillGroupCard}>
                {group.map((props: SkillProps, idx: number) => (
                  <Skill key={idx} {...props} />
                ))}
              </div>
            ))}
          </div>

          {/* Pagination dots */}
          <div className={styles.paginationDots}>
            {skillGroups.map((_, idx) => (
              <span
                key={idx}
                className={`${styles.dot} ${idx === activeCard ? styles.dotActive : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
