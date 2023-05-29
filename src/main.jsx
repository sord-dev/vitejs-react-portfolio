import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { BrowserRouter } from 'react-router-dom';

import { Layout, ParticleBackground } from './components';
import { UserDataProvider } from './contexts/ProjectDataContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserDataProvider>
      <Layout>
        <ParticleBackground>
          <App />
        </ParticleBackground>
      </Layout>
    </UserDataProvider>
  </BrowserRouter>
);
