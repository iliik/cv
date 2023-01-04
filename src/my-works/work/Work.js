import React from 'react';
import style from './Work.module.css'

function Work(props) {
    return (
        <div className={style.work}>
            <div>{props.title}</div>
            <h2 className={style.video}>{props.discription}</h2>
            <div className={style.project}>
                <span className={style.projectName}>Имя проекта</span>
                <span className={style.description}>Краткое Описание </span>
            </div>
        </div>
    );
}

export default Work;
