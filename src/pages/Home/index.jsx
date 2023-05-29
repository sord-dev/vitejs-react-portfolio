import { Hero, ProjectList } from '../../components';
import { LinkButton } from '../../components/LinkButton';

import styles from './styles.module.css';

export const Home = ({ projects = [] }) => {
  return (
    <>
      <Hero />
      <div className={styles['project-list']}>
        <ProjectList projects={projects} />
        <LinkButton link="/projects" message="All Projects" sameSite={true} />
      </div>
    </>
  );
};
