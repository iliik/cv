import style from './Main.module.scss';
import React from "react";
import { tsParticles } from "tsparticles-engine";


function Main() {

    const particlesOptions = {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            }

        }
    };
    return (
        <div className={style.mainBlock}>
            <tsParticles className={style.particles} params={particlesOptions}/>
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
        </div>
    );
}

export default Main;
