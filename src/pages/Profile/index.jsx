import { AboutMe, SkillStack } from '../../components';
import { useProjectData } from '../../contexts/ProjectDataContext';

export const Profile = () => {
  const { skills } = useProjectData();

  return (
    <>
      <AboutMe />
      <h2 style={{ textAlign: 'center' }}>Skills</h2>
      <SkillStack {...{ skills }} />;
    </>
  );
};
