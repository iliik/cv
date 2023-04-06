import React from 'react';
import style from './Project.module.scss'
import {Button} from "../../common/components/button/Button";
import {Slide} from "react-awesome-reveal";

type ProjectType = {
    title: string
    style: {}
    discription: string

}

function Project(props: ProjectType) {
    return (
        <Slide>
            <div className={style.project}>
                <div className={style.image} style={props.style}>
                    <Button text={'Watch'} todo='https://vk.com/id203437843'/>
                </div>
                <div className={style.projectInfo}>
                    <h3 className={style.projectTitle}>{props.title}</h3>
                    <span className={style.description}>{props.discription}</span>
                </div>
            </div>
        </Slide>
    );
}

export default Project;
