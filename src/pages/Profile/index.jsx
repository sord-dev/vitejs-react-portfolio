import { AboutMe, FadeIn, SkillStack } from '../../components';
import { useProjectData } from '../../contexts/ProjectDataContext';

export const Profile = () => {
  const { skills } = useProjectData();

  return (
    <>
      <FadeIn>
        <AboutMe />
        <SkillStack {...{ skills }} />;
      </FadeIn>
    </>
  );
};
