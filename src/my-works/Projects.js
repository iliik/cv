import React from 'react';
import style from './Projects.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import todolistImage from "./../assets/image/PQjXipuxaEc.jpg"
import socialImage from "./../assets/image/Social-Networking-App-in-React.png"

function Projects() {
    const social = {
        backgroundImage: `url(${socialImage})`,
    }
    const todolist = {
        backgroundImage: `url(${todolistImage})`,
    }
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={'Projects'}/>
                <div className={style.projects}>
                    <Project style={social} title={"Social network"}
                             discription={'sed do eiusmod tempor incidiunt ut labox'}/>
                    <Project style={todolist} title={"Todo list"}
                             discription={'Lorem ipsum dolor sit amet, consectetur'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
