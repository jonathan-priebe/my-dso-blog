import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

interface Technology {
  name: string;
  icon: string;
}

interface ProjectProps {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  documentationLink?: string;
  githubLink?: string;
}

const ProjectList: ProjectProps[] = [
  {
    id: 1,
    title: 'Baby Tools',
    description: `Write some information about the project.
For example: Why are you proud of it?
What were you able to implement here?
What different algorithms, server architecture did you use?
Why did you find this project so interesting?`,
    image: 'https://via.placeholder.com/500x300/4CAF50/ffffff?text=Baby+Tools',
    technologies: [
      { name: 'Python', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png' },
      { name: 'Container', icon: 'https://www.svgrepo.com/show/331370/docker.svg' },
    ],
  },
  {
    id: 2,
    title: 'Truck Signs API',
    description: `Write some information about the project.
For example: Why are you proud of it?
What were you able to implement here?
What different algorithms, server architecture did you use?
Why did you find this project so interesting?`,
    image: 'https://via.placeholder.com/500x300/FF5722/ffffff?text=Truck+Signs+API',
    technologies: [
      { name: 'Python', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png' },
      { name: 'Shell scripting', icon: 'https://www.svgrepo.com/show/353478/bash-icon.svg' },
    ],
  },
  {
    id: 3,
    title: 'Juice Shop Meister',
    description: `Write some information about the project.
For example: Why are you proud of it?
What were you able to implement here?
What different algorithms, server architecture did you use?
Why did you find this project so interesting?`,
    image: 'https://via.placeholder.com/500x300/FFC107/ffffff?text=Juice+Shop',
    technologies: [
      { name: 'IT Security', icon: 'https://static.wixstatic.com/media/6818fc_0a9e063f9cc04eeca7ddd79b6df4e5be~mv2.png/v1/fill/w_390,h_410,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6818fc_0a9e063f9cc04eeca7ddd79b6df4e5be~mv2.png' },
    ],
  },
  {
    id: 4,
    title: 'Project Minecraft',
    description: `Write some information about the project.
For example: Why are you proud of it?
What were you able to implement here?
What different algorithms, server architecture did you use?
Why did you find this project so interesting?`,
    image: 'https://www.playcentral.de/wp-content/uploads/2011/10/minecraft-3.jpg',
    technologies: [
      { name: 'Yaml', icon: 'https://assets.exercism.org/tracks/yamlscript.svg' },
      { name: 'Shell scripting', icon: 'https://www.svgrepo.com/show/353478/bash-icon.svg' },
      { name: 'IT Security', icon: 'https://static.wixstatic.com/media/6818fc_0a9e063f9cc04eeca7ddd79b6df4e5be~mv2.png/v1/fill/w_390,h_410,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6818fc_0a9e063f9cc04eeca7ddd79b6df4e5be~mv2.png' },
      { name: 'Container', icon: 'https://www.svgrepo.com/show/331370/docker.svg' },
    ],
    documentationLink: '#',
    githubLink: 'https://github.com/jonathanpriebe',
  },
  {
    id: 5,
    title: 'WordPress hosten',
    description: `Write some information about the project.
For example: Why are you proud of it?
What were you able to implement here?
What different algorithms, server architecture did you use?
Why did you find this project so interesting?`,
    image: 'https://www.whatsdigital.de/wp-content/uploads/2024/01/sWordpress.jpg',
    technologies: [
      { name: 'Container', icon: 'https://www.svgrepo.com/show/331370/docker.svg' },
      { name: 'Shell scripting', icon: 'https://www.svgrepo.com/show/353478/bash-icon.svg' },
    ],
  },
];

export default function MyProjectHighlights(): JSX.Element {
  const [selectedProject, setSelectedProject] = useState<ProjectProps>(ProjectList[3]); // Start with Minecraft

  return (
    <section id="projects" className={styles.projectHighlights}>
      <div className={styles.projectsContainer}>
        <h2 className={styles.sectionTitle}>My project highlights</h2>

        <div className={styles.projectsLayout}>
          {/* Left side - Project List */}
          <div className={styles.projectList}>
            {ProjectList.map((project, idx) => (
              <button
                key={project.id}
                className={`${styles.projectListItem} ${selectedProject.id === project.id ? styles.projectListItemActive : ''}`}
                onClick={() => setSelectedProject(project)}
              >
                <span className={styles.projectNumber}>{idx + 1}.</span>
                <span className={styles.projectListTitle}>{project.title}</span>
              </button>
            ))}
            <Link to="#" className={styles.seeMoreLink}>
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                width="16" 
                height="16" 
                viewBox="0 0 20 19" 
                fill="none"
                style={{ marginRight: "8px" }} 
                >
              <path d="M16.3356 11.795H2.65397C2.52208 11.795 2.41381 11.7602 2.32915 11.6904C2.24449 11.6206 2.20216 11.5314 2.20216 11.4227V0.907312C2.20216 0.649837 2.0967 0.434299 1.88578 0.2607C1.67511 0.0869007 1.41354 0 1.10108 0C0.788617 0 0.52705 0.0869007 0.316377 0.2607C0.105459 0.434299 0 0.649837 0 0.907312V11.4227C0 12.026 0.259243 12.5414 0.777729 12.9688C1.29646 13.396 1.92187 13.6097 2.65397 13.6097H16.3356L11.7052 17.4249C11.4869 17.605 11.3717 17.8187 11.3595 18.0661C11.3472 18.3133 11.455 18.5307 11.6828 18.7184C11.9106 18.9061 12.1722 19 12.4675 19C12.7631 19 13.0248 18.9061 13.2526 18.7184L19.6245 13.4678C19.762 13.3545 19.8589 13.235 19.9152 13.1094C19.9717 12.9838 20 12.8481 20 12.7024C20 12.5566 19.9717 12.4209 19.9152 12.2953C19.8589 12.1697 19.762 12.0502 19.6245 11.9369L13.2298 6.66753C13.0116 6.48768 12.7561 6.39896 12.4635 6.40138C12.1708 6.4036 11.9106 6.49856 11.6828 6.68628C11.4702 6.87399 11.3601 7.0864 11.3525 7.32351C11.3449 7.56083 11.455 7.77334 11.6828 7.96105L16.3356 11.795Z" fill="white"/>
              </svg>
              <span>see more projects</span>
            </Link>


          </div>

          {/* Right side - Project Detail */}
          <div className={styles.projectCard}>
            <div className={styles.projectCardHeader}>
              <h3 className={styles.projectTitle}>{selectedProject.title}</h3>
              <div className={styles.projectTechBadges}>
                {selectedProject.technologies.map((tech, idx) => (
                  <div key={idx} className={styles.techBadge}>
                    <img src={tech.icon} alt={tech.name} className={styles.techIcon} />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.projectContent}>
              <div className={styles.projectImage}>
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              <div className={styles.projectTextArea}>
                <p className={styles.projectDescription}>{selectedProject.description}</p>
                <div className={styles.projectActions}>
              {selectedProject.documentationLink && (
                <Link to={selectedProject.documentationLink} className={styles.btnDocumentation}>
                  Documentation
                </Link>
              )}
              {selectedProject.githubLink && (
                <Link to={selectedProject.githubLink} className={styles.btnGithub}>
                  GitHub
                </Link>
              )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
