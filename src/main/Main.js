import style from './Main.module.scss';
import React from "react";
import {Roll} from "react-awesome-reveal";


function Main() {

    return (
        <div className={style.mainBlock}>
            <Roll>
                <div className={style.container}>
                    <div className={style.greeting}>
                        <span>Hi There</span>
                        <span>I am  Ilya<span>Kashalevich</span></span>
                        <h1> Frontend Developer.</h1>
                    </div>
                    <div className={style.photo}>
                        <div className={style.image}></div>
                    </div>
                </div>
            </Roll>
        </div>

    );
}

export default Main;
