import { useEffect } from 'react';
import { useProjectData } from '../../contexts/ProjectDataContext';

export const Profile = () => {
  const { skills } = useProjectData();

  useEffect(() => {
    console.log(skills);
  }, []);

  return <>PROFILE PAGEEE</>;
};
