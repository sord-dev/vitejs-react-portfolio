import { Routes, Route } from 'react-router-dom';
import { Home, Projects } from './pages';

// todo

// add extra on hover thumbnail
// add profile page - skills, experience, cv and socials (show github activity?)
// add a contact component to home page
// expand footer component (add socials)?

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="profile" element={<>PROFILE PAGEEE</>} />
      </Route>
    </Routes>
  );
}

export default App;
