import React from 'react';
import style from './Options.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/components/title/Title";
import {Button} from "../common/components/button/Button";


function Options() {
    return (
        <div className={style.optionsBlock}>
            <div className={`${styleContainer.container} ${style.optionsContainer}`}>
                <Title text={'Consider remote work options'}/>
                {/*<button className={style.button}>Hire me</button>*/}
                <Button text={'Hire me'}/>
            </div>
        </div>
    );
}

export default Options;