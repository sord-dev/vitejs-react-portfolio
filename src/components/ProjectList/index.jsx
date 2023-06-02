import React from 'react';
import styles from './styles.module.css';

import ProjectItem from './ProjectItem';

export const ProjectList = ({ projects = [], float = false }) => {
  if (!projects.length) return <>No project items provided.</>;
  return (
    <div
      className={
        float
          ? `${styles['project_list']} ${styles['float']}`
          : styles['project_list']
      }
    >
      {projects.map((p, i) => (
        <ProjectItem {...p} key={`product-item-${p}-index-${i}`} />
      ))}
    </div>
  );
};
