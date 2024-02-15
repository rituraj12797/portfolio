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
  communet,
  weather,
  movie_dash,
  blogapp,
  aurorafest,
  redux,
  tailwind,
  nodejs,
  git,
  ho,
  express,
  stealthstartup,
  vercel,
  mongodb,
  chartjs,
  postman,
  github,
  canva,
  cpp,
  figma,
  mongoose,
  scss,
  jwt,
  zod,

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
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Web devlopement',
    icon: prototyping,
  },
];

const technologies = [
  
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Express JS',
    icon: express,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Nodejs',
    icon: nodejs,
  },
  { 
     name: "JWT",
     icon:jwt,
  },
  {
    name: "Mongoose",
    icon:mongoose
  },
  {
    name: "Zod",
    icon:zod,
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
    name:"SCSS",
    icon:scss,
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
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name:"C++",
    icon:cpp,
  },
  {
    name:'Chartjs',
    icon: chartjs,
  },
  {
    name: 'Postman',
    icon: postman,
  },
  {
    name: 'GitHub',
    icon: github,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name:"Figma",
    icon:figma,
  },
  {
    name:"Canva",
    icon:canva,
  },
  {
    name: 'Vercel',
    icon: vercel,
  },
];

const experiences = [
  
  {
    title:" 1st Rank Quine track",
    icon: ho,
    iconBg: '#333333',
    company_name:"Hack Odisha  NIT Rourkela",
    date: 'Sept 2023 - Oct 2024',
  },
  {
    title:" 1st Rank Webkriti",
    icon: ho,
    company_name: 'AASF club IIIT Gwalior',
    iconBg: '#333333',
    date: 'Sept 2023 - Oct 2024',
  },
  {
    title:" Contributor",
    icon: ho,
    company_name: 'Hacktoberfest and MLH global hack week',
    iconBg: '#333333',
    date: 'Sept 2023 - Oct 2024',
  },
  {
    title:" 1st Rank Winter projects",
    icon: ho,
    company_name: 'AASF club IIIT Gwalior',
    iconBg: '#333333',
    date: 'Sept 2023 - Oct 2024',
  },
  {
    title: 'Full stack dev. Intern',
    company_name: 'Stealth Startup',
    icon: stealthstartup,
    iconBg: '#333333',
    date: 'Dec 2023 - Feb 2024',
  }
];

const projects = [
  {
    id: 'project-1',
    name: 'Communet',
    description: 'A microservice architecture based mass mailing system.',
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
    image: communet,
    repo: 'https://github.com/rituraj12797/Mailer_frontend',
    demo: 'https://commu-net.vercel.app/',
  },
  {
    id: 'project-2',
    name: 'Aurora 2024',
    description:
      ' The website for the annual cultural fest of IIIT Gwalior, Aurora 2024.',
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
    image: aurorafest ,
    repo: 'https://github.com/Aurora-Landing-Page/Main-Page-frontend',
    demo:"https://aurorafest.in"
  },
  {
    id: 'project-3',
    name: 'Blog App',
    description: ' A blog application built with html, css, js and node js.',
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient',
      },
      {
        name: 'js',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: blogapp ,
    repo: 'https://github.com/rituraj12797/FRONTEND',
    demo:'https://rituraj12797.github.io/FRONTEND/'
  },
  {
    id: ' project-4',
    name: ' weather app',
    description: `A single-page weather app to show weather forecast .`,
    tags: [
      {
        name: 'chart.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'lottiefiles',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: weather,
    repo: 'https://github.com/rituraj12797/weatherApp',
    demo:'https://rituraj12797.github.io/weatherApp/'
  },
  {
    id: 'project-5',
    name: ' Movie Dash',
    description:
      'This is a movie dashboard where you can search for movies and see their details. and book ticket',
    tags: [
      {
        name: 'React.js',
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
    image: movie_dash,
    repo: 'https://github.com/rituraj12797/movie_dash',
    demo: 'https://movie-dash-iota.vercel.app/',
  },
];

export { services, technologies, experiences, projects };
