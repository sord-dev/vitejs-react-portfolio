import React from 'react';
import styles from './styles.module.css';

import ProjectItem from '../ProjectList/ProjectItem';

export const ProjectList = ({ projects = [] }) => {
  return (
    <div className={styles['project_list']}>
      {projects.map((p) => (
        <ProjectItem {...p} />
      ))}
    </div>
  );
};