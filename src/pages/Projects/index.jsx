import { FadeIn, ProjectList } from '../../components';
import { useProjectData } from '../../contexts/ProjectDataContext';

export const Projects = () => {
  const { projects } = useProjectData();

  return (
    <>
      <FadeIn>
        <ProjectList projects={projects} />
      </FadeIn>
    </>
  );
};
