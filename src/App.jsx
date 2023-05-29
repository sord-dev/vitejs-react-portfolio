import { Routes, Route } from 'react-router-dom';
import { Home, Projects } from './pages';

// todo

// add extra on hover thumbnail
// add profile page - skills, experience, cv and socials (show github activity?)
// add a contact component to home page
// expand footer component (add socials)?

const PROJECTS = [
  {
    project_name: 'SerenityAI',
    project_url: 'https://i.ibb.co/Fz5tq4L/sai-thumbnail.png',
    link: 'https://serenity-ai.netlify.app/authenticate/register',
    code: 'https://github.com/sord-dev/mental-health-server',
    project_description:
      'An anonymous AI powered mentorship application designed for people to get tailored and unbiased support.',
    tags: ['OpenAI', 'React', 'Vanilla CSS', 'NodeJS/Express', 'Team Project'],
  },
  {
    project_name: 'React Templates',
    project_url:
      'https://user-images.githubusercontent.com/75338985/241231484-f503e849-255d-429e-8e51-6b85800d4940.png',
    link: '#',
    code: 'https://github.com/sord-dev/react-templates',
    project_description:
      'A React Component Repository similar to tailwind components, designed to take away the hassle of designing a bunch of components all the time.',
    tags: ['NextJS', 'Sequelize', 'MongoDB', 'Cloudinary API'],
  },
  {
    project_name: 'Makeup Artist Portfolio',
    project_url: 'https://i.postimg.cc/D0Zmytcb/makeup-portfolio.png',
    link: 'https://ashleigh-lavery.vercel.app',
    code: 'https://github.com/sord-dev/Ashleigh-Lavery',
    project_description:
      'Makeup Artist portfolio created for Freelance work, showcasing the makeup and photoshoots the client has done.',
    tags: ['NextJS', 'React', 'Vanilla CSS', 'Framer Motion'],
  },
];

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home projects={PROJECTS} />} />
        <Route path="projects" element={<Projects projects={PROJECTS} />} />
        <Route path="profile" element={<>PROFILE PAGEEE</>} />
      </Route>
    </Routes>
  );
}

export default App;
