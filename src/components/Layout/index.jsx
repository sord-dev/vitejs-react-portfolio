import React from 'react';
import { NavLink } from 'react-router-dom';

export const Layout = ({ children }) => {
  const navIsActive = ({ isActive }) => (isActive ? 'active' : '');

  return (
    <>
      <header>
        <div className="container">
          <h1>Stef</h1>

          <nav>
            <NavLink className={navIsActive} to="/profile">
              Profile
            </NavLink>
            <NavLink className={navIsActive} to="/projects">
              Projects
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="container">{children}</main>

      <footer>
        <div className="container">
          Made with ❤️ by{' '}
          <a href="https://github.com/sord-dev" target="_blank">
            stef
          </a>
        </div>
      </footer>
    </>
  );
};
