import React from 'react';
import style from './Skill.module.scss'

function Skill(props) {

    return (
        <div className={style.skill}>
            <div style={props.style} className={style.icon}></div>

            <h3>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
}

export default Skill;
