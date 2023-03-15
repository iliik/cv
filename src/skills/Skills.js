import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";


function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title  text={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'TEXT'}/>
                    <Skill title={'Rect'} description={'TEXT '}/>
                    <Skill title={'Rect'} description={'TEXT '}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
