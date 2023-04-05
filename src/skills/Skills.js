import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import {Bounce, Slide} from "react-awesome-reveal";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div id='skills' className={`${styleContainer.container} ${style.skillsContainer}`}>

                <Bounce>
                    <Title text={'Skills'}/>
                </Bounce>

                <Slide>
                    <div className={style.skills}>
                        <Skill title={'JS'} description={'TEXT'}/>
                        <Skill title={'Rect'} description={'TEXT '}/>
                        <Skill title={'Redux'} description={'TEXT '}/>
                        <Skill title={'Redux-toolkit'} description={'TEXT '}/>
                        <Skill title={'Storybook'} description={'TEXT '}/>
                        <Skill title={'Sass'} description={'TEXT '}/>
                        <Skill title={'Css'} description={'TEXT '}/>
                        <Skill title={'Typescript'} description={'TEXT '}/>
                    </div>
                </Slide>
            </div>


        </div>
    );
}

export default Skills;
