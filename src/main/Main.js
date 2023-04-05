import style from './Main.module.scss';
import React from "react";
import {Bounce, Slide} from "react-awesome-reveal";
import ReactTypingEffect from 'react-typing-effect';
import {Tilt} from 'react-tilt'

function Main() {

    return (
        <div id='main' className={style.mainBlock}>
            <div className={style.container}>

                <Slide>
                    <div className={style.greeting}>
                        <span>Hi There</span>
                        <span>I am  Ilya<span>Koshelevich</span></span>
                        <ReactTypingEffect text="Frontend Developer."/>
                    </div>
                </Slide>

                <Bounce>
                    <Tilt>
                        <div className={style.photo}>
                            <div className={style.image}></div>
                        </div>
                    </Tilt>
                </Bounce>

            </div>

        </div>

    );
}

export default Main;
