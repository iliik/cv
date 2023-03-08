import React from 'react';
import style from './Options.module.css'
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/components/title/Title";


function Options() {
    return (
        <div className={style.optionsBlock}>
            <div className={`${styleContainer.container} ${style.optionsContainer}`}>
                <Title text={'Consider remote work options'}/>
                <button className={style.button}>Hire me</button>
            </div>
        </div>
    );
}

export default Options;