import { imgPaths } from 'utils/imgPaths'

export interface ProjectType {
  name: string
  description: string
  points: string[]
  tagUrls: string[]
  links: string[]
}

export const projects: ProjectType[] = [
  {
    name: 'CardTap portal',
    description:
      'CardTap is a lab equipment access control and management solution. I' + 
      'developed a web portal from the ground up. Also I developed a backend for' +
      'managing IOT devices.' +
      'Cardtap portal is a dashboard app, used to interact with IOT hardware and' +
      'lab equipment. Currently cardtap is used by OSU(Oregon state university).',
    points: [
      '🏃 Developed a web application for a startup using Django & AWS.',
      '💎 Deployed project in AWS(ecr + ecs fargate)',
      '👯 User auth, authorization, filters etc',
      '🔼 Setup CI/CD using Github Actions',
      '🐳 docker + AWS Fargate for the deployment',
    ],
    tagUrls: [
      imgPaths['Python'].path,
      imgPaths['Django'].path,
      imgPaths['Django Rest Framework'].path,
      imgPaths['mySQL'].path,
      imgPaths['docker'].path,
      imgPaths['AWS'].path,
      imgPaths['Javascript'].path,
      imgPaths['bootstrap'].path,
    ],
    links: ['', 'https://cardtap.net/'],
  },

  {
    name: 'Portfolio Site',
    description:
      'Personal portfolio and a personal blog is always a nice thing to have, so I handcrafted one for myself to showcase my blogs and projects',
    points: [
      '👾 Next.js for the core',
      '🧰 TypeScript for the language',
      '📝 MDX for the Blog',
      '📓 next-contentlayer for blog management',
      '🐱 Github comments and reactions',
      '💎 Prism to highlight the code blocks',
      '🌠 Framer Motion for animation',
      '💅 Sass for styling',
      '🔮 Vercel open graph dynamic image generation',
      '✨ SEO optimized',
    ],
    tagUrls: [imgPaths['Next.js'].path, imgPaths['Typescript'].path, imgPaths['Sass'].path],
    links: ['https://github.com/10xsai/portfolio', 'https://10xsai.com'],
  },

  {
    name: 'WorkBud Portal',
    description:
      'Worked as backend developer at Workbud. Workbud was an early stage' +
      'startup with a 14 member team when I joined. Worked on marketplace' +
      'features for managing rfp’s and proposals from manufacturing companies' +
      'and staffing companies.',
    points: [
      '🌟 Developed backend for marketplace feature',
      '🌊 Completed the entire workflow for the feature.',
      '🌠 Used Django Rest framework for building API’s',
      '🍀 Worked in multi-tenant architecture',
    ],
    tagUrls: [imgPaths['Django'].path, imgPaths['Django Rest Framework'].path],
    links: ['', 'https://www.workbud.com/'],
  },

  {
    name: 'CardTap Cloud API',
    description:
      'CardTap cloud API is mainly responsible for developing APIs related to IOT equipment which CardTap uses',
    points: [
      '📝 Developed backend for managing HTTP requests coming from IOT devices using Django & AWS.',
      '🔭 Implemented features like requests filtering, data validation, authorization, product tier validation, logging, etc',
    ],
    tagUrls: [imgPaths['Django'].path, imgPaths['Django Rest Framework'].path, imgPaths['AWS'].path],
    links: ['', ''],
  },


  {
    name: 'Resource Management Tool',
    description: 'Developed both frontend and backend for bulk upload and static data modules.',
    points: [
      '📂 Developed Bulk upload feature for importing data into db.',
      '📝 Developed a static data page for doing CRUD on static data tables.',
    ],
    tagUrls: [
      imgPaths['Java'].path,
      imgPaths['Angular'].path,
      imgPaths['Springboot'].path,
      imgPaths['mySQL'].path,
    ],
    links: ['', ''],
  },

]

/*

  {
    name: 'Heart rate anomaly map',
    description:
      'Lorem ipsum dolor sit amet consectetur dolor officia recnt tenetur similique porro adipisicing elit. Architecto quae enim sit quas',
    points: ['📝 BEM', ' Mixins, global variables', '💎 Transitions and animations', '📝 Responsive design', '🌠 Scalable CSS patterns'],

    tagUrls: [
      imgPaths['Next.js'].path,
      imgPaths['Typescript'].path,
      imgPaths['GraphQL'].path,
      imgPaths['Apollo'].path,
      imgPaths['postgreSQL'].path,
      imgPaths['redis'].path,
      imgPaths['typeorm'].path,
      imgPaths['express'].path,
      imgPaths['docker'].path,
    ],
    links: ['https://github.com/0xHecker/beddit-web', 'https://beddit-lac.vercel.app/'],
  },

*/
