import React from 'react';
import style from './Work.module.css'

function Work(props) {
    return (
        <div className={style.work}>
            <div>{props.title}</div>
            <div className={style.videocontainer}>
                <button href className={style.video}>{props.discription}</button>
            </div>
            <div className={style.project}>
                <span className={style.projectName}>Имя проекта</span>
                <span className={style.description}>Краткое Описание </span>
            </div>
        </div>
    );
}

export default Work;
