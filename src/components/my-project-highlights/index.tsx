import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
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
    image: 'img/portfolio/my-project/baby-shop.svg',
    technologies: [
      { name: 'Python', icon: 'img/portfolio/skills/python_logo.svg' },
      { name: 'Container', icon: 'img/portfolio/skills/Docker_1_logo.svg' },
    ],
    documentationLink: '/docs/projects/baby-tools-shop',
    githubLink: 'https://github.com/jonathan-priebe/baby-tools-shop',
  },
  {
    id: 2,
    title: 'Truck Signs API',
    description: `Write some information about the project.
For example: Why are you proud of it?
What were you able to implement here?
What different algorithms, server architecture did you use?
Why did you find this project so interesting?`,
    image: 'img/portfolio/my-project/truck-api.svg',
    technologies: [
      { name: 'Python', icon: 'img/portfolio/skills/python_logo.svg' },
      { name: 'Shell scripting', icon: 'img/portfolio/skills/terminal-2_2logo.svg' },
    ],
    documentationLink: '/docs/projects/truck_signs_api',
    githubLink: 'https://github.com/jonathan-priebe/truck_signs_api',
  },
  {
    id: 3,
    title: 'Juice Shop Meister',
    description: `Write some information about the project.
For example: Why are you proud of it?
What were you able to implement here?
What different algorithms, server architecture did you use?
Why did you find this project so interesting?`,
    image: 'img/portfolio/my-project/jucie-shop.svg',
    technologies: [
      { name: 'IT Security', icon: 'img/portfolio/skills/it_sec_logo1.svg' },
    ],
    documentationLink: '/docs/projects/hack-challenger',
    githubLink: 'https://github.com/jonathan-priebe/hack-challenger',
  },
  {
    id: 4,
    title: 'Project Minecraft',
    description: `Write some information about the project.
For example: Why are you proud of it?
What were you able to implement here?
What different algorithms, server architecture did you use?
Why did you find this project so interesting?`,
    image: 'img/portfolio/my-project/minecraft.svg',
    technologies: [
      { name: 'Yaml', icon: 'img/portfolio/skills/Official_YAML_Logo_2.svg' },
      { name: 'Shell scripting', icon: 'img/portfolio/skills/terminal-2_2logo.svg' },
      { name: 'IT Security', icon: 'img/portfolio/skills/it_sec_logo1.svg' },
      { name: 'Container', icon: 'img/portfolio/skills/Docker_1_logo.svg' },
    ],
    documentationLink: '/docs/projects/Minecraft-Server',
    githubLink: 'https://github.com/jonathan-priebe/Minecraft-Server',
  },
  {
    id: 5,
    title: 'Conduit(Container)',
    description: `Write some information about the project.
For example: Why are you proud of it?
What were you able to implement here?
What different algorithms, server architecture did you use?
Why did you find this project so interesting?`,
    image: 'img/portfolio/my-project/docker_conduit.svg',
    technologies: [
      { name: 'Yaml', icon: 'img/portfolio/skills/Official_YAML_Logo_2.svg' },
      { name: 'Shell scripting', icon: 'img/portfolio/skills/terminal-2_2logo.svg' },
      { name: 'IT Security', icon: 'img/portfolio/skills/it_sec_logo1.svg' },
      { name: 'Container', icon: 'img/portfolio/skills/Docker_1_logo.svg' },
    ],
    documentationLink: '/docs/projects/Conduit-Container-Setup',
    githubLink: 'https://github.com/jonathan-priebe/conduit-container-setup',
  },
  {
    id: 6,
    title: 'WordPress hosten',
    description: `Write some information about the project.
For example: Why are you proud of it?
What were you able to implement here?
What different algorithms, server architecture did you use?
Why did you find this project so interesting?`,
    image: 'img/portfolio/my-project/wordpress.svg',
    technologies: [
      { name: 'Yaml', icon: 'img/portfolio/skills/Official_YAML_Logo_2.svg' },
      { name: 'Shell scripting', icon: 'img/portfolio/skills/terminal-2_2logo.svg' },
      { name: 'IT Security', icon: 'img/portfolio/skills/it_sec_logo1.svg' },
      { name: 'Container', icon: 'img/portfolio/skills/Docker_1_logo.svg' },
    ],
    documentationLink: '/docs/projects/WordPress',
    githubLink: 'https://github.com/jonathan-priebe/WordPress',
  },
];

// Desktop projects (without Conduit)
const DesktopProjectList = [
  ProjectList[0], // Baby Tools
  ProjectList[1], // Truck Signs API
  ProjectList[2], // Juice Shop Meister
  ProjectList[3], // Minecraft
  ProjectList[5], // WordPress (skip Conduit at index 4)
];

// Mobile-only projects (Minecraft, Conduit, WordPress)
const MobileProjectList = [
  ProjectList[3], // Minecraft (id: 4)
  ProjectList[4], // Conduit (id: 5)
  ProjectList[5], // WordPress (id: 6)
];

export default function MyProjectHighlights(): JSX.Element {
  const [selectedProject, setSelectedProject] = useState<ProjectProps>(DesktopProjectList[3]); // Start with Minecraft
  const [clickedProjects, setClickedProjects] = useState<Set<number>>(new Set([DesktopProjectList[3].id])); // Track clicked projects

  const handleProjectClick = (project: ProjectProps) => {
    setSelectedProject(project);
    setClickedProjects(prev => new Set(prev).add(project.id));
  };

  return (
    <section id="projects" className={styles.projectHighlights}>
      <div className={styles.projectsContainer}>
        <h2 className={styles.sectionTitle}>My project highlights</h2>

        {/* Desktop view */}
        <div className={`${styles.projectsLayout} ${styles.desktopView}`}>
          {/* Left side - Project List */}
          <div className={styles.projectList}>
            {DesktopProjectList.map((project, idx) => (
              <button
                key={project.id}
                className={`${styles.projectListItem} ${clickedProjects.has(project.id) ? styles.projectListItemActive : ''}`}
                onClick={() => handleProjectClick(project)}
              >
                <span className={styles.projectNumber}>{idx + 1}.</span>
                <span className={styles.projectListTitle}>{project.title}</span>
              </button>
            ))}
            <Link to="/docs/projects/overview" className={styles.seeMoreLink}>
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
                    <img src={useBaseUrl(tech.icon)} alt={tech.name} className={styles.techIcon} />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.projectContent}>
              <div className={styles.projectImage}>
                <img src={useBaseUrl(selectedProject.image)} alt={selectedProject.title} />
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

        {/* Mobile view - Minecraft, Conduit, WordPress */}
        <div className={styles.mobileView}>
          {MobileProjectList.map((project, idx) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectCardHeader}>
                <h3 className={styles.projectTitle}>
                  {idx + 1}.{project.title}
                </h3>
                <div className={styles.projectTechBadges}>
                  {project.technologies.map((tech, techIdx) => (
                    <div key={techIdx} className={styles.techBadge}>
                      <img src={useBaseUrl(tech.icon)} alt={tech.name} className={styles.techIcon} />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.projectContent}>
                <div className={styles.projectImageWrapper}>
                  <img src={useBaseUrl(project.image)} alt={project.title} className={styles.projectImage} />
                </div>
                <div className={styles.projectInfo}>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.projectActions}>
                    {project.documentationLink && (
                      <Link to={project.documentationLink} className={styles.btnDocumentation}>
                        Documentation
                      </Link>
                    )}
                    {project.githubLink && (
                      <Link to={project.githubLink} className={styles.btnGithub}>
                        GitHub
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className={styles.seeMoreProjects}>
            <p className={styles.seeMoreText}>
              Write some information about your other projects. What projects have you been working on so far?
            </p>
            <Link to="/docs/projects/overview" className={styles.seeMoreLink}>
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
        </div>
      </div>
    </section>
  );
}
