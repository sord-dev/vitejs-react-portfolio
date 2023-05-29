import { ProjectList } from '../../components';

export const Projects = ({ projects = [] }) => {
  return (
    <>
      <ProjectList projects={projects} />
    </>
  );
};
