import { useEffect, useState } from 'react';
import { FadeIn, ProjectList } from '../../components';
import { useProjectData } from '../../contexts/ProjectDataContext';
import { scrubGithubResponse } from '../../utils';

let cache = {
  githubProjects: [],
};

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const defaults = useProjectData();

  useEffect(() => {
    const getRepos = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/sord-dev/repos'
        );
        if (response.ok) {
          const data = await response.json();

          let repos = scrubGithubResponse(data);
          cache['githubProjects'] = repos;

          setProjects(repos);
        } else {
          console.error('Error:', response.status);
          setProjects(defaults.projects);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    if (cache['githubProjects'].length === 0) {
      getRepos();
    } else {
      // if github response cached set to cached data
      setProjects(cache['githubProjects']);
    }
  }, []);

  return (
    <>
      <FadeIn>
        <ProjectList projects={projects} />
      </FadeIn>
    </>
  );
};
