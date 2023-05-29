import { Routes, Route } from 'react-router-dom';
import { Home } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="profile" element={<Home />} />
        <Route path="projects" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
