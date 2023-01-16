export type Project = {
  name: string;
  description: string;
  time: string;
  image: string;
  skillIcons: string[];
  codeLink?: string;
};

export const projectsData: Project[] = [
  {
    name: 'Endgame',
    description:
      'A mock keyboard eCommerce store with user authentication, product filtering, and shopping cart.',
    time: 'Sep 2022 - Dec 2022',
    image: 'images/endgame-1.png',
    skillIcons: [
      'icons/typescript.svg',
      'icons/react.svg',
      'icons/tailwindcss.svg',
      'icons/firebase.svg',
    ],
    codeLink: 'https://github.com/wzhengg/endgame-api',
  },
];
