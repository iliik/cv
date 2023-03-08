import React from 'react';
import style from './Options.module.css'
import styleContainer from "../common/styles/Container.module.css";


function Options() {
    return (
        <div className={style.optionsBlock}>
            <div className={`${styleContainer.container} ${style.optionsContainer}`}>
                <h3 className={style.h3}>Consider remote work options</h3>
                <button className={style.button}>Hire me</button>
            </div>
        </div>
    );
}

export default Options;