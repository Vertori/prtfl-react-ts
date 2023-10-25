import htmlLogo from "./techLogos/htmlLogo.svg";
import cssLogo from "./techLogos/cssLogo.svg";
import jsLogo from "./techLogos/jsLogo.svg";
import reactLogo from "./techLogos/reactLogo.svg";
import tailwindLogo from "./techLogos/tailwindLogo.svg";
import firebaseLogo from "./techLogos/firebaseLogo.svg";
import styledcomponentsLogo from "./techLogos/styledcomponentsLogo.svg";
import framermotionLogo from "./techLogos/framermotionLogo.svg";
import githubLogo from "./techLogos/githubLogo.svg";
import gitLogo from "./techLogos/gitLogo.svg";
import typescriptLogo from "./techLogos/typescriptLogo.svg";
import reduxLogo from "./techLogos/reduxLogo.svg";
import angularLogo from "./techLogos/angularLogo.svg";
import sassLogo from "./techLogos/sassLogo.svg";
import viteLogo from "./techLogos/viteLogo.svg";
import vscLogo from "./techLogos/vscLogo.svg";
import yarnLogo from "./techLogos/yarnLogo.svg";
import netflix1 from "./websites/netflix1.webp";
import netflix2 from "./websites/netflix2.webp";
import netflix3 from "./websites/netflix3.webp";
import ecommerce1 from "./websites/ecommerce1.webp";
import ecommerce2 from "./websites/ecommerce2.webp";
import ecommerce3 from "./websites/ecommerce3.webp";
import yt1 from "./websites/yt1.webp";
import yt3 from "./websites/yt3.webp";
import tesla1 from "./websites/tesla1.webp";
import tesla2 from "./websites/tesla2.webp";
import weather1 from "./websites/weather1.webp";
import weather2 from "./websites/weather2.webp";
import games1 from "./websites/games1.webp";
import games2 from "./websites/games2.webp";

const techList = [
  {
    id: 1,
    name: "HTML",
    image: htmlLogo,
  },
  {
    id: 2,
    name: "CSS",
    image: cssLogo,
  },
  {
    id: 3,
    name: "Sass",
    image: sassLogo,
  },
  {
    id: 4,
    name: "JavaScript",
    image: jsLogo,
  },
  {
    id: 5,
    name: "TypeScript",
    image: typescriptLogo,
  },
  {
    id: 6,
    name: "React JS",
    image: reactLogo,
  },
  {
    id: 7,
    name: "Angular",
    image: angularLogo,
  },
  {
    id: 8,
    name: "Redux",
    image: reduxLogo,
  },
  {
    id: 9,
    name: "Tailwind CSS",
    image: tailwindLogo,
  },
  {
    id: 10,
    name: "Styled Components",
    image: styledcomponentsLogo,
  },
  {
    id: 11,
    name: "Firebase",
    image: firebaseLogo,
  },
  {
    id: 12,
    name: "Framer Motion",
    image: framermotionLogo,
  },
  {
    id: 13,
    name: "Vite",
    image: viteLogo,
  },
  {
    id: 14,
    name: "Yarn",
    image: yarnLogo,
  },
  {
    id: 15,
    name: "Visual Studio Code",
    image: vscLogo,
  },
  {
    id: 16,
    name: "GitHub",
    image: githubLogo,
  },
  {
    id: 17,
    name: "Git",
    image: gitLogo,
  },
];

const currentlyLearning = [
  {
    id: 1,
    name: "Redux",
    image: reduxLogo,
  },
];

const projectsList = [
  {
    id: 1,
    name: "E-commerce website",
    description:
      "Online store website created by fetching data from Fake Store API, fully styled using Tailwind CSS. The website allows you to add items to the cart and fully manipulate cart content. The shopping cart dynamically updates the number of items in it and their total value. Each product has its own dynamically generated page.",
    images: [ecommerce1, ecommerce2, ecommerce3],
    tags: [
      "React",
      "Typescript",
      "Redux",
      "Tailwind CSS",
      "API (Axios)",
      "React Router",
      "Swiper",
    ],
    liveLink: "https://ecmrc-react-ts-redux-rf.netlify.app/",
    codeLink: "https://github.com/Vertori/ecmrc-react-ts-redux.git",
  },
  {
    id: 2,
    name: "Netflix Clone",
    description:
      "Netlix Clone created by fetching data from TMDb API, fully styled using Tailwind CSS. Thanks to Firebase, the website allows signing in, signing up, saving movies for signed in users and deleting them from saved list. Account page is only available to signed in users, which is provided by protected route. ",
    images: [netflix1, netflix2, netflix3],
    tags: [
      "React",
      "Typescript",
      "Tailwind CSS",
      "API (Axios)",
      "Firebase",
      "React Router",
      "Swiper",
    ],
    liveLink: "https://netflix-clone-react-ts-rf.netlify.app/",
    codeLink: "https://github.com/Vertori/ntflx-cln-react-ts",
  },
  {
    id: 3,
    name: "Games Search Engine",
    description:
      "A website designed to find games and get detailed information about them. Created using React JS, TypeScript and designed using Tailwind CSS. Website is fully responsive and based on fetching data using Axios from an API. It allows you to search for games by name, filter games by category, and display detailed information about games, all dynamically generated via queries to the API.",
    images: [games1, games2],
    tags: [
      "React",
      "Typescript",
      "Tailwind CSS",
      "API (Axios)",
      "React Router",
      "Context API",
    ],
    liveLink: "https://discover-games-react-ts-rf.netlify.app/",
    codeLink: "https://github.com/Vertori/games-app-react-ts",
  },
  {
    id: 4,
    name: "YouTube Clone",
    description:
      "Website created by fetching data from API, fully styled using Tailwind CSS. It allows you to search for movies and channels, to watch movies and explore channels content. Each movie includes its own dynamically generated page that contains information about the movie and displays other related movies.",
    images: [yt1, yt3],
    tags: [
      "React",
      "Typescript",
      "Tailwind CSS",
      "API (Axios)",
      "React Router",
      "React Player",
    ],
    liveLink: "https://yt-clone-react-ts-rf.netlify.app/",
    codeLink: "https://github.com/Vertori/yt-cln-react-ts",
  },
  {
    id: 5,
    name: "Tesla Clone",
    description:
      "Tesla Clone website designed using Styled Components. This is a simple page that, using a single component that accepts props, generates sections for each brand model. Sections are animated using React Awesome Reveal, and scrolling the mouse causes the website to jump to the next sections.",
    images: [tesla1, tesla2],
    tags: [
      "React",
      "Typescript",
      "Styled Components",
      "React Router",
      "React Awesome Reveal",
    ],
    liveLink: "https://tesla-clone-react-ts-rf.netlify.app/",
    codeLink: "https://github.com/Vertori/tsl-cln-react-typescript",
  },
  {
    id: 6,
    name: "Weather App",
    description:
      "Weather app based on fetching data from Weather API. It allows users to search for any city, selecting one from those suggested by a dynamically generated list. The application then displays detailed weather data for the selected location. Fully styled using Tailwind CSS.",
    images: [weather1, weather2],
    tags: [
      "React",
      "Typescript",
      "Tailwind CSS",
      "API (Axios)",
      "React Router",
    ],
    liveLink: "https://weather-app-react-ts-rf.netlify.app/",
    codeLink: "https://github.com/Vertori/wthr-app-react-typescript.git",
  },
];

export { techList, currentlyLearning, projectsList };
