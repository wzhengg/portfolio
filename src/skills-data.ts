const ICON_DIR = 'icons';

export type Skill = {
  name: string;
  icons: string[];
};

export const languagesData: Skill[] = [
  {
    name: 'JavaScript/TypeScript',
    icons: [`${ICON_DIR}/javascript.svg`, `${ICON_DIR}/typescript.svg`],
  },
  {
    name: 'Java',
    icons: [`${ICON_DIR}/java.svg`],
  },
  {
    name: 'Python',
    icons: [`${ICON_DIR}/python.svg`],
  },
  {
    name: 'HTML',
    icons: [`${ICON_DIR}/html.svg`],
  },
  {
    name: 'CSS/SASS',
    icons: [`${ICON_DIR}/css.svg`, `${ICON_DIR}/sass.svg`],
  },
];

export const frameworksData: Skill[] = [
  {
    name: 'React.js',
    icons: [`${ICON_DIR}/react.svg`],
  },
  {
    name: 'Node.js/Express.js',
    icons: [`${ICON_DIR}/node.svg`, `${ICON_DIR}/express.svg`],
  },
  {
    name: 'MongoDB/Mongoose',
    icons: [`${ICON_DIR}/mongodb.svg`, `${ICON_DIR}/mongoose.png`],
  },
  {
    name: 'Tailwind CSS',
    icons: [`${ICON_DIR}/tailwindcss.svg`],
  },
];

export const miscellaneousData: Skill[] = [
  {
    name: 'Git',
    icons: [`${ICON_DIR}/git.svg`],
  },
  {
    name: 'Linux',
    icons: [`${ICON_DIR}/linux.svg`],
  },
];
