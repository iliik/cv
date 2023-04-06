import React from 'react';
import style from './Skill.module.scss'

export function Skill(props) {
    return (
        <div className={style.skill}>
            <div style={props.style} className={style.icon}></div>
            <h3>{props.title}</h3>
        </div>
    );
}

