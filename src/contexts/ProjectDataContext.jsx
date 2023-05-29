import React, { useState, useContext, createContext, useEffect } from 'react';

const ProjectDataContext = createContext(null);

import PROJECTS from '../assets/projects.json';

export const ProjectDataProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(PROJECTS);
  }, [PROJECTS]);

  return (
    <ProjectDataContext.Provider value={{ projects }}>
      {children}
    </ProjectDataContext.Provider>
  );
};

export const useProjectData = () => useContext(ProjectDataContext);
