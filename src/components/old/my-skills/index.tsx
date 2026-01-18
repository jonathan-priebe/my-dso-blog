import React from 'react';
import styles from './styles.module.css';

interface SkillProps {
  title: string | string[];
  image: string;
  description: string;
  usage: string[];
}

const SkillList: SkillProps[] = [
  {
    title: ['HTML'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1200px-HTML5_Badge.svg.png',
    description: 'Semantic HTML and modern web standards',
    usage: [ 'Semantic structure', 'Accessible markup', 'SEO optimization', 'Reusable components', ],
  },
  {
    title: ['CSS'],
    image: 'https://ultimatecourses.com/assets/category/css-fcba6b473cb1125595dc28163be24eb673907258b5f6f6c82967a0587a9df20c.svg',
    description: 'Responsive design and animations',
    usage: [ 'Responsive layouts', 'Animations and transitions', 'Flexbox and Grid', 'Design system styling', ],
  },
  {
    title: ['Static Site', 'Generator'],
    image: 'https://www.svgrepo.com/show/353662/docusaurus.svg',
    description: 'Static site generation and documentation',
    usage: [ 'Search functionality', 'Static website customization', 'Tags, categories, RSS feeds', 'Internationalization (i18n)', ],
  },
  {
    title: ['Python'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png',
    description: 'Backend development and scripting',
    usage: [ 'Web frameworks (Django, Flask)', 'Data analysis (Pandas, NumPy)', 'Automation scripts', 'API development', ],
  },
  {
    title:['Shell', 'Scripting'],
    image: 'https://www.svgrepo.com/show/353478/bash-icon.svg',
    description: 'Package management',
    usage: [ 'Automation of tasks', 'System administration', 'Custom scripts', 'Environment setup', ],
  },
  {
    title: ['YAML'],
    image: 'https://assets.exercism.org/tracks/yamlscript.svg',
    description: 'Container orchestration',
    usage: [ 'Configuration files', 'Data serialization', 'CI/CD pipelines', 'Infrastructure as code', ],
  },
  {
    title: ['Container'],
    image: 'https://www.svgrepo.com/show/331370/docker.svg',
    description: 'Containerization and deployment',
    usage: [ 'Dockerfile creation', 'Container orchestration', 'Microservices architecture', 'Environment consistency', ],
  },
  {
    title: ['CI/CD with', 'GitHub Actions'],
    image: 'https://me-dutour-mathieu.gallerycdn.vsassets.io/extensions/me-dutour-mathieu/vscode-github-actions/3.0.1/1596182639279/Microsoft.VisualStudio.Services.Icons.Default',
    description: 'Version control and collaboration',
    usage: [ 'Automated testing', 'Deployment pipelines', 'Linting and formatting', 'Release tagging', ],
  },
  {
    title: ['IT Security'],
    image: 'https://static.wixstatic.com/media/6818fc_0a9e063f9cc04eeca7ddd79b6df4e5be~mv2.png/v1/fill/w_390,h_410,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6818fc_0a9e063f9cc04eeca7ddd79b6df4e5be~mv2.png',
    description: 'Application and infrastructure security',
    usage: [ 'Vulnerability assessment', 'Security audits', 'Secure coding practices', 'Incident response', ],
  },
];

function Skill({ title, image, description, usage }: SkillProps) {
  return (
    <div className={styles.skillCard}>
      <div className={styles.skillFront}>
        <div className={styles.skillIconWrapper}>
          <img
            src={image}
            alt={Array.isArray(title) ? title.join(' ') : title}
            className={styles.skillImage}
          />
        </div>
        <h3 className={styles.skillTitle}>
          {Array.isArray(title)
            ? title.map((line, i) => <span key={i}>{line}<br /></span>)
            : title}
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
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.skillsContainer}>
        <h2 className={styles.sectionTitle}>My Skills</h2>
        <div className={styles.skillsGrid}>
          {SkillList.map((props, idx) => (
            <Skill key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
