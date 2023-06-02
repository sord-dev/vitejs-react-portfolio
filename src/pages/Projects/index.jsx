import { useEffect, useState } from 'react';
import { FadeIn, ProjectList } from '../../components';
import { useProjectData } from '../../contexts/ProjectDataContext';
import { scrubGithubResponse } from '../../utils';
import { AiOutlineArrowDown } from 'react-icons/ai';

let cache = {
  githubProjects: [],
};

const ITEMS_PER_PAGE = 6; // Adjust this value as needed

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const defaults = useProjectData();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/sord-dev/repos'
        );
        if (response.ok) {
          const data = await response.json();
          let repos = scrubGithubResponse(data);
          cache['githubProjects'] = repos;
          setProjects(repos.slice(0, ITEMS_PER_PAGE));
        } else {
          console.error('Error:', response.status);
          setProjects(defaults.projects);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    if (cache['githubProjects'].length === 0) {
      fetchProjects();
    } else {
      setProjects(cache['githubProjects'].slice(0, ITEMS_PER_PAGE));
    }
  }, []);

  const handleLoadMore = () => {
    const startIndex = currentPage * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const nextProjects = cache['githubProjects'].slice(startIndex, endIndex);
    setProjects((prevProjects) => [...prevProjects, ...nextProjects]);
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const canLoadMore =
    currentPage * ITEMS_PER_PAGE < cache['githubProjects'].length;

  return (
    <>
      <FadeIn>
        <ProjectList projects={projects} float={true} />

        {canLoadMore && (
          <button onClick={handleLoadMore} className="paginate">
            Load More <AiOutlineArrowDown />
          </button>
        )}
      </FadeIn>
    </>
  );
};
