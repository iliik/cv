import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import {Bounce, Slide} from "react-awesome-reveal";
import {SkillsSet} from "../common/data/dataSet";

function Skills() {

    return (
        <div id='skills' className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>

                <Bounce>
                    <Title text={'Skills'}/>
                </Bounce>
                <Slide>
                    <div className={style.skills}>
                        {SkillsSet.map((el, index) => {
                           return <Skill key={index} style={el.style} title={el.title}/>
                        })}
                    </div>
                </Slide>
            </div>


        </div>
    );
}

export default Skills;
