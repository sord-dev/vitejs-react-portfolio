import { Routes, Route } from 'react-router-dom';
import { Home, Profile, Projects } from './pages';

// todo

// add profile page - experience, cv and socials (show github activity?)
// add a contact component to home page
// expand footer component add socials

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
