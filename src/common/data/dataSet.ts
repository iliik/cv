import reduxIcon from "../../assets/iconProject/Redux.png";
import reactIcon from "../../assets/iconProject/[removal.ai]_tmp-642daebc5e36b.png";
import storybookIcon from "../../assets/iconProject/storybook-icon.svg";
import jsIcon from "../../assets/iconProject/Unofficial_JavaScript_logo_2.svg.png";
import typeScriptIcon from "../../assets/iconProject/[removal.ai]_tmp-642d9f24e2c72.png";
import sassIcon from "../../assets/iconProject/288_Sass-512.webp";
import cssIcon from "../../assets/iconProject/CSS3_logo.svg.png";
import reduxToolkitIcon from "../../assets/iconProject/redux-toolkit-1400.webp";
import htmlIcon from "../../assets/iconProject/html-svgrepo-com.svg";
import gitIcon from "../../assets/iconProject/git.png";
import materialUiIcon from "../../assets/iconProject/[removal.ai]_tmp-642daaa1032cb.png";
import restApiIcon  from "../../assets/iconProject/rest-api-1.svg";



const redux = {backgroundImage: `url(${reduxIcon})`}
const react = {backgroundImage: `url(${reactIcon})`}
const storybook = {backgroundImage: `url(${storybookIcon})`}
const js = {backgroundImage: `url(${jsIcon})`}
const typeScript = {backgroundImage: `url(${typeScriptIcon})`}
const sass = {backgroundImage: `url(${sassIcon})`,}
const css = {backgroundImage: `url(${cssIcon})`}
const reduxToolkit = {backgroundImage: `url(${reduxToolkitIcon})`}

const html = {backgroundImage: `url(${htmlIcon})`}
const git = {backgroundImage: `url(${gitIcon})`}
const materialUi = {backgroundImage: `url(${materialUiIcon})`}
const restApi = {backgroundImage: `url(${restApiIcon})`}


export const SkillsSet = [
    {style: redux, title: 'Redux'},
    {style: react, title: 'React'},
    {style: storybook, title: 'Storybook'},
    {style: typeScript, title: 'TypeScript'},
    {style: sass, title: 'Sass'},
    {style: css, title: 'Css'},
    {style: js, title: 'JavaScript'},
    {style: html, title: 'Html'},
    {style: git, title: 'Git'},
    {style: materialUi, title: 'MaterialUi'},
    {style: restApi, title: 'RestApi'},
    {style: reduxToolkit, title: 'ReduxToolkit'},
]
