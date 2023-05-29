import React, { useState, useContext, createContext, useEffect } from 'react';

const ProjectDataContext = createContext(null);

import PROJECTS from '../assets/projects.json';
import SKILLS from '../assets/skills.json';

export const ProjectDataProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState({});

  const updateDefaultValues = () => {
    setProjects(PROJECTS);
    setSkills(SKILLS);
  };

  useEffect(() => {
    updateDefaultValues();
  }, [PROJECTS, SKILLS]);

  useEffect(() => {
    updateDefaultValues();
  }, []);

  return (
    <ProjectDataContext.Provider value={{ projects, skills }}>
      {children}
    </ProjectDataContext.Provider>
  );
};

export const useProjectData = () => useContext(ProjectDataContext);
