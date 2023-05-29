import { ProjectList } from '../../components';
import { useProjectData } from '../../contexts/ProjectDataContext';

export const Projects = () => {
  const { projects } = useProjectData();

  return (
    <>
      <ProjectList projects={projects} />
    </>
  );
};
