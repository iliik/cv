import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";


function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerBlock}`}>
                <h2 className={style.name}>Илья Кошелевич</h2>
                <span className={style.icon}></span>
                <span className={style.icon}></span>
                <span className={style.icon}></span>
                <h2 className={style.date}> @ 2023 Все права защищены</h2>
            </div>

        </div>
    );
}

export default Footer;