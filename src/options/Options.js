import React from 'react';
import style from './Options.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/components/title/Title";
import {Button} from "../common/components/button/Button";

import {Fade} from "react-awesome-reveal";


import {Bounce} from "react-awesome-reveal";
import {JackInTheBox} from "react-awesome-reveal";
import {Rotate} from "react-awesome-reveal";
import {Slide} from "react-awesome-reveal";

function Options() {
    return (
        <div className={style.optionsBlock}>
            <div className={`${styleContainer.container} ${style.optionsContainer}`}>
                <Slide >
                    <Title text={'Consider remote work options'}/>
                </Slide>
               <Button text={'Hire me'}/>
            </div>
        </div>
    );
}

export default Options;