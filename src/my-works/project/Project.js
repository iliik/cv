import React from 'react';
import style from './Project.module.css'

function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.image} style={props.style}>
                <a className={style.video}>Watch</a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}>{props.discription}</span>
            </div>

        </div>
    );
}

export default Project;
