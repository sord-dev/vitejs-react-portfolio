import { Hero, ProjectList } from '../../components';
import { LinkButton } from '../../components/LinkButton';
import { useProjectData } from '../../contexts/ProjectDataContext';

import styles from './styles.module.css';

export const Home = () => {
  const { projects } = useProjectData();

  return (
    <>
      <Hero />
      <div className={styles['project-list']}>
        <h2>Selected Work</h2>
        <ProjectList projects={projects} />
        <LinkButton link="/projects" message="All Projects" sameSite={true} />
      </div>
    </>
  );
};
