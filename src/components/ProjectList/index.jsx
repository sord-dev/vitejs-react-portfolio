import React from 'react';
import styles from './styles.module.css';

import ProjectItem from './ProjectItem';

export const ProjectList = ({ projects = [] }) => {
  if (!projects.length) return <>No project items provided.</>;
  return (
    <div className={styles['project_list']}>
      {projects.map((p, i) => (
        <ProjectItem {...p} key={`product-item-${p}-index-${i}`} />
      ))}
    </div>
  );
};
