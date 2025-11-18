import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const SkillList = [
  {
    title: 'Cloud Platforms',
    description: (
      <>
        AWS, Azure, Google Cloud Platform
      </>
    ),
  },
  {
    title: 'DevOps Tools',
    description: (
      <>
        Docker, Kubernetes, Jenkins, GitLab CI, Terraform, Ansible
      </>
    ),
  },
  {
    title: 'Programming Languages',
    description: (
      <>
        Python, JavaScript, TypeScript, Go, Java
      </>
    ),
  },
  {
    title: 'Databases',
    description: (
      <>
        PostgreSQL, MySQL, MongoDB, Redis
      </>
    ),
  },
  {
    title: 'Operating Systems',
    description: (
      <>
        Linux (Ubuntu, CentOS, RHEL), Windows Server
      </>
    ),
  },
  {
    title: 'Other',
    description: (
      <>
        Networking, Security, Monitoring (Prometheus, Grafana), Logging (ELK Stack)
      </>
    ),
  },
];

function Skill({title, description}: {title: string, description: JSX.Element}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function MySkills(): JSX.Element {
  return (
    <section className={styles.skills}>
      <div className="container">
        <div className="row">
          <h2 className="col col--12 text--center">My Skills</h2>
        </div>
        <div className="row">
          {SkillList.map((props, idx) => (
            <Skill key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
