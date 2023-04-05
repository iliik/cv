import reduxIcon from "../../assets/iconProject/Redux.png";
import reactIcon from "../../assets/iconProject/react-1.svg";
import storybookIcon from "../../assets/iconProject/storybook-icon.svg";
import jsIcon from "../../assets/iconProject/Unofficial_JavaScript_logo_2.svg.png";
import typescriptIcon from "../../assets/iconProject/[removal.ai]_tmp-642d9f24e2c72.png";
import sassIcon from "../../assets/iconProject/288_Sass-512.webp";
import cssIcon from "../../assets/iconProject/CSS3_logo.svg.png";
import reduxToolkitIcon from "../../assets/iconProject/redux-toolkit-1400.webp";
import htmlIcon from "../../assets/iconProject/html-svgrepo-com.svg";
import gitIcon from "../../assets/iconProject/png-clipart-github-repository-git-project-commit-github-angle-logo-thumbnail.png";
import materiaUiIcon from "../../assets/iconProject/[removal.ai]_tmp-642daaa1032cb.png";
import restApiIcon  from "../../assets/iconProject/rest-api-1.svg";



const redux = {backgroundImage: `url(${reduxIcon})`}
const react = {backgroundImage: `url(${reactIcon})`}
const storybook = {backgroundImage: `url(${storybookIcon})`}
const js = {backgroundImage: `url(${jsIcon})`}
const typescript = {backgroundImage: `url(${typescriptIcon})`}
const sass = {backgroundImage: `url(${sassIcon})`,}
const css = {backgroundImage: `url(${cssIcon})`}
const reduxToolkit = {backgroundImage: `url(${reduxToolkitIcon})`}

const html = {backgroundImage: `url(${htmlIcon})`}
const git = {backgroundImage: `url(${gitIcon})`}
const materiaUi = {backgroundImage: `url(${materiaUiIcon})`}
const restApi = {backgroundImage: `url(${restApiIcon})`}


export const SkillsSet = [
    {style: redux, title: 'Redux'},
    {style: react, title: 'React'},
    {style: storybook, title: 'Storybook'},
    {style: typescript, title: 'Typescript'},
    {style: sass, title: 'Sass'},
    {style: css, title: 'Css'},
    {style: js, title: 'JavaScript'},
    {style: html, title: 'Html'},
    {style: git, title: 'Git'},
    {style: materiaUi, title: 'MateriaUi'},
    {style: restApi, title: 'RestApi'},
    {style: reduxToolkit, title: 'ReduxToolkit'},
]
