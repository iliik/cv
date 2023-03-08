import React from 'react';
import style from './MyWorks.module.css'
import styleContainer from "../common/styles/Container.module.css";
import Work from "./work/Work";


function Title() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <div className={style.title}>
                    <h2>Projects</h2>
                </div>
                <div className={style.projects}>
                    <Work title={"Social networc"} discription={'sed do eiusmod tempor incidiunt ut labox'}/>
                    <Work title={"Todo list"} discription={'Lorem ipsum dolor sit amet, consectetur'}/>
                </div>
            </div>
        </div>
    );
}

export default Title;
