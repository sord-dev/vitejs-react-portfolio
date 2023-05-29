import { Hero, ProjectList } from '../../components';

const projects = [
  {
    project_name: 'SerenityAI',
    project_url: 'https://i.ibb.co/Fz5tq4L/sai-thumbnail.png',
    link: 'https://serenity-ai.netlify.app/authenticate/register',
    project_description:
      'An anonymous AI powered mentorship application designed for people to get tailored and unbiased support.',
    tags: ['OpenAI', 'React', 'Vanilla CSS', 'NodeJS/Express'],
  },
  {
    project_name: 'React Templates',
    project_description:
      'A React Component Repository similar to tailwind components, designed to take away the hassle of designing a bunch of components all the time.',
    tags: ['NextJS', 'Sequelize', 'MongoDB', 'Cloudinary API'],
  },
  {
    project_name: 'Makeup Artist Portfolio',
    project_description:
      'Makeup Artist portfolio created for Freelance work, showcasing the makeup and photoshoots the client has done.',
    tags: ['NextJS', 'React', 'Vanilla CSS', 'Framer Motion'],
  },
];

export const Home = () => {
  return (
    <>
      <Hero />
      <ProjectList projects={projects} />
    </>
  );
};
