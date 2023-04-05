import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import {Bounce, Slide} from "react-awesome-reveal";
import reduxToolkitIcon
    from '../assets/iconProject/png-transparent-redux-react-javascript-freecodecamp-npm-others-miscellaneous-purple-violet-thumbnail.png'
import cssIcon from '../assets/iconProject/CSS3_logo.svg.png'
import sassIcon
    from '../assets/iconProject/kisspng-sass-logo-cascading-style-sheets-scalable-vector-g-codzero-cms-blog-tool-publishing-platform-5b74aaa0de6192.1715579115343725129109.jpg'
import typescriptIcon from '../assets/iconProject/storybook.svg'
import jsIcon from '../assets/iconProject/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png'
import storybookIcon from '../assets/iconProject/storybook-icon.svg'
import reduxIcon from '../assets/iconProject/Redux.png'
import reactIcon
    from '../assets/iconProject/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png'

function Skills() {

    const redux = {backgroundImage: `url(${reduxIcon})`,}
    const react = {backgroundImage: `url(${reactIcon})`,}
    const storybook = {backgroundImage: `url(${storybookIcon})`,}
    const js = {backgroundImage: `url(${jsIcon})`,}
    const typescript = {backgroundImage: `url(${typescriptIcon})`,}
    const sass = {backgroundImage: `url(${sassIcon})`,}
    const css = {backgroundImage: `url(${cssIcon})`,}
    const reduxToolkit = {backgroundImage: `url(${reduxToolkitIcon})`,}

    return (
        <div id='skills' className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>

                <Bounce>
                    <Title text={'Skills'}/>
                </Bounce>

                <Slide>
                    <div className={style.skills}>
                        <Skill style={js} title={'JS'} description={'TEXT'}/>
                        <Skill style={react} title={'Rect'} description={'TEXT '}/>
                        <Skill style={redux} title={'Redux'} description={'TEXT '}/>
                        <Skill style={reduxToolkit} title={'Redux-toolkit'} description={'TEXT '}/>
                        <Skill style={storybook} title={'Storybook'} description={'TEXT '}/>
                        <Skill style={sass} title={'Sass'} description={'TEXT '}/>
                        <Skill style={css} title={'Css'} description={'TEXT '}/>
                        <Skill style={typescript} title={'Typescript'} description={'TEXT '}/>
                    </div>
                </Slide>
            </div>


        </div>
    );
}

export default Skills;
