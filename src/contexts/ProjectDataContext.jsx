import React, { useState, useContext, createContext, useEffect } from 'react';

const UserDataContext = createContext(null);

import PROJECTS from '../assets/projects.json';
import SKILLS from '../assets/skills.json';

export const UserDataProvider = ({ children }) => {
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
    <UserDataContext.Provider value={{ projects, skills }}>
      {children}
    </UserDataContext.Provider>
  );
};

export const useProjectData = () => useContext(UserDataContext);
