import React from 'react';
import style from './Work.module.css'

function Work(props) {
    return (
        <div className={style.work}>
            <div></div>
            <div className={style.videocontainer}>
                <button href className={style.video}>Watch</button>
            </div>
            <div className={style.project}>
                <span className={style.projectName}>{props.title}</span>
                <span className={style.description}>{props.discription}</span>
            </div>
        </div>
    );
}

export default Work;
