import React from 'react';
import style from './Projects.module.css'
import styleContainer from "../common/styles/Container.module.css";
import Project from "./project/Project";
import Title from "../common/components/title/Title";


function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                    <Title text={'Projects'}/>
                <div className={style.projects}>
                    <Project title={"Social network"} discription={'sed do eiusmod tempor incidiunt ut labox'}/>
                    <Project title={"Todo list"} discription={'Lorem ipsum dolor sit amet, consectetur'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
