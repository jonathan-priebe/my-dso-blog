import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const ProjectList = [
  {
    title: 'Project Alpha',
    description: (
      <>
        Developed a scalable microservices architecture using Kubernetes and Docker.
      </>
    ),
    tags: ['Kubernetes', 'Docker', 'Microservices'],
  },
  {
    title: 'Project Beta',
    description: (
      <>
        Implemented CI/CD pipelines with Jenkins and GitLab CI for automated deployments.
      </>
    ),
    tags: ['Jenkins', 'GitLab CI', 'CI/CD'],
  },
  {
    title: 'Project Gamma',
    description: (
      <>
        Migrated on-premise infrastructure to AWS cloud, optimizing costs and performance.
      </>
    ),
    tags: ['AWS', 'Cloud Migration', 'Cost Optimization'],
  },
];

function Project({title, description, tags}: {title: string, description: JSX.Element, tags: string[]}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="card-demo">
        <div className="card">
          <div className="card__header">
            <h3>{title}</h3>
          </div>
          <div className="card__body">
            <p>{description}</p>
          </div>
          <div className="card__footer">
            <div className="button-group button-group--block">
              {tags.map((tag, idx) => (
                <span key={idx} className="button button--outline button--primary button--sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MyProjectHighlights(): JSX.Element {
  return (
    <section className={styles.projectHighlights}>
      <div className="container">
        <div className="row">
          <h2 className="col col--12 text--center">My Project Highlights</h2>
        </div>
        <div className="row">
          {ProjectList.map((props, idx) => (
            <Project key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
