import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/components/title/Title";


function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerBlock}`}>
                <Title text={'Ilya Koshelevich'}/>
                <div className={style.iconBlock}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                </div>
                <h2 className={style.date}> @2023 All rights reserved</h2>
            </div>

        </div>
    );
}

export default Footer;