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
import restApiIcon from "../../assets/iconProject/rest-api-1.svg";

import telegramIcon from "../../assets/icon/telegram.svg";
import linkedinIcon from "../../assets/icon/telegram.svg";
import vkIcon from "../../assets/icon/vk-circled.png";
import instagramIcon from "../../assets/icon/Capture001.png";


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

type SkillsSetType = {
    //need to fix any
    style: any
    title: string
}

export type ContactsSetType = {
    href: string
    src: string
    alt: string
}

export const SkillsSet: SkillsSetType[] = [
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

export const ContactsSet: ContactsSetType[] = [
    {href: "https://t.me/koshelben", src: telegramIcon, alt: "telegram"},
    {
        href: "https://www.linkedin.com/in/%D0%B8%D0%BB%D1%8C%D1%8F-%D0%BA%D0%BE%D1%88%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D1%87-298976238/",
        src: linkedinIcon, alt: "Linkedin"
    },
    {href: "https://vk.com/id203437843", src: vkIcon, alt: "vk"},
    {href: "https://www.instagram.com/ilya_koshelben/?igshid=YmMyMTA2M2Y%3D", src: instagramIcon, alt: "instagram"},
]
