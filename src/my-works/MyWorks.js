import React from 'react';
import style from './MyWorks.module.css'
import styleContainer from "../common/styles/Container.module.css";
import Work from "./work/Work";


function MyWorks() {
    return (
        <div className={style.workBlock}>
            <div className={`${styleContainer.container} ${style.workContainer}`}>
                <h2 className={style.titleWorks}>MyWorks</h2>
                <div className={style.works}>
                    <Work title={"Kартинка1"} discription={'Смотреть'}/>
                    <Work title={"Kартинка2"} discription={'Смотреть'}/>
                </div>

            </div>
        </div>
    );
}

export default MyWorks;
