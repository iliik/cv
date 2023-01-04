import React from 'react';
import style from './Options.module.css'
import styleContainer from "../common/styles/Container.module.css";


function Options() {
    return (
        <div className={style.optionsBlock}>
            <div className={`${styleContainer.container} ${style.optionsContainer}`}>
                <h3 className={style.title}> Рассмотрю варинты удаленной работы</h3>
                <button className={style.button}>Нанять меня</button>
            </div>
        </div>
    );
}

export default Options;