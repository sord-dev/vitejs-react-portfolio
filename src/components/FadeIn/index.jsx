import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

export const FadeIn = ({ children }) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className={`${styles['fade-in']} ${fadeIn ? styles['show'] : ''}`}>
      {children}
    </div>
  );
};
