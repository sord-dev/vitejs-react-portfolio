import { Hero, ProjectList } from '../../components';

export const Home = ({ projects = [] }) => {
  return (
    <>
      <Hero />
      <ProjectList projects={projects} />
    </>
  );
};
