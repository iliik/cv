import reduxIcon from "../../assets/iconProject/Redux.png";
import reactIcon from "../../assets/iconProject/react-1.svg";
import storybookIcon from "../../assets/iconProject/storybook-icon.svg";
import jsIcon from "../../assets/iconProject/Unofficial_JavaScript_logo_2.svg.png";
import typescriptIcon from "../../assets/iconProject/[removal.ai]_tmp-642d9f24e2c72.png";
import sassIcon from "../../assets/iconProject/288_Sass-512.webp";
import cssIcon from "../../assets/iconProject/CSS3_logo.svg.png";
import reduxToolkitIcon from "../../assets/iconProject/mziq95fvwx3tt74icr2r.webp";


const redux = {backgroundImage: `url(${reduxIcon})`}
const react = {backgroundImage: `url(${reactIcon})`}
const storybook = {backgroundImage: `url(${storybookIcon})`}
const js = {backgroundImage: `url(${jsIcon})`}
const typescript = {backgroundImage: `url(${typescriptIcon})`}
const sass = {backgroundImage: `url(${sassIcon})`,}
const css = {backgroundImage: `url(${cssIcon})`}
const reduxToolkit = {backgroundImage: `url(${reduxToolkitIcon})`}


export const SkillsSet = [
    {style: redux, title: 'Redux'},
    {style: react, title: 'React'},
    {style: storybook, title: 'Storybook'},
    {style: typescript, title: 'Typescript'},
    {style: sass, title: 'Sass'},
    {style: css, title: 'Css'},
    {style: reduxToolkit, title: 'ReduxToolkit'},
    {style: js, title: 'JavaScript'},
]
