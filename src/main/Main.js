import style from './Main.module.scss';
import React from "react";
import {Roll} from "react-awesome-reveal";
import ReactTypingEffect from 'react-typing-effect';

function Main() {

    return (
        <div className={style.mainBlock}>

                <div className={style.container}>
                    <Roll>
                    <div className={style.greeting}>
                        <span>Hi There</span>
                        <span>I am  Ilya<span>Kashalevich</span></span>

                         <ReactTypingEffect text="Frontend Developer."/>

                    </div>
                    <div className={style.photo}>
                        <div className={style.image}></div>
                    </div>
                    </Roll>
                </div>

        </div>

    );
}

export default Main;
