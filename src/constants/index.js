import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';



export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  
  { id: 'awards',
     title: 'Awards'
    
    },
  {
    id: 'contact',
    title: 'Contact',
  },
 

];

const services = [
  {
    title: 'Electrical Engineer',
    icon: backend,
  },
  {
    title: 'Researcher',
    icon: ux, 
  },
  {
    title: 'Resident Assistant',
    icon: prototyping,
  },
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];
const experiences = [
  {
    title: 'Resident Assistant',
    company_name: 'Residential Life',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2024 - present',
  },
  {
    title: 'Research Intern',
    company_name: 'Nano Electronics and Computing Research Laboratory',
    icon: nyeusi,
    iconBg: '#000000',
    date: 'Aug 2024 -  present',
  },
];


const projects = [

  {
    id: 'project-4',
    name: 'SFSU Solar Regatta',
    description: 'Participated in the 2025 Solar Regatta, helping design and race a solar-powered boat. Worked on system integration, testing, and performance optimization alongside a multidisciplinary team.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    
    image: movie,
    
    demo: 'https://engineering.sfsu.edu/solar-regatta-spring-2025',


  },

  {
    id: 'project-5',
    name: 'Infinity Helmet',
    description: 'led a team to design a low-cost hurricane helmet, cutting costs by 66.3% compared to competition.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: space,
    
    demo: 'https://drive.google.com/file/d/17e7uTQSKG-kt5KvTS65ap-Cg_npTB8Mg/view?usp=sharing',

  },


  {
    id: 'project-1',
    name: 'SF Maps',
    description: 'A web application for San Francisco State students to locate their classes. Awarded "Best Design"',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/Alex-RV/sfsu_maps',
    demo: 'https://sfsu-maps.vercel.app/',
  },
  {
    id: 'project-2',
    name: 'Harvard SUmmer Camp',
    description:
      'Designed and build a functional robot that won second place in the competition.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,

  },
  {
    id: 'project-3',
    name: 'Not to persuade',
    description: 'Developed an algorithm to prevent social media harassment. Secured first place in Hackathon',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    
    demo: 'https://www.youtube.com/watch?v=Abzka1Uw9EU&list=PLROWtI7htoKQopkDBCo5bz79M-w0orAY4&index=3&t=1s',
  },



];

const awards = [
  {
    title: '1st Place - Hackathon',
    description: 'Developed an anti-harassment algorithm, securing 1st place at a university-wide hackathon.',

  },
  {
    title: 'Best Design - SF Maps',
    description: 'Recognized for exceptional design in a web mapping tool for campus navigation.',
   
  },
  {
    title: 'Diana T.Y. Chung and Henry WS Chung Memorial Scholarship',
    description: 'Awarded based on academic merit and financial need, with higher consideration given to academic merit',
   
  },
  {
    title: 'San Francisco State University Deans List academic year 2023-2024',
    description: 'Students must have completed the semester with a GPA of 3.25 or greater.',
   
  },

  {
    title: 'Best Leader Award, Robotics Summer Camp',
    description: 'Recognized for outstanding leadership, teamwork, and project management in successfully guiding a team through a robotics competition.',
   
  },
  
];



export { services, technologies, experiences, projects, awards };