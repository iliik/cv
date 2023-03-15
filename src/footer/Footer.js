import React from 'react';
import style from './Footer.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/components/title/Title";


function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <Title text={'Ilya Kashalevich'}/>
                <div className={style.socialIcons}>
                    <div className={style.socialIcon}><a href=''><img src={telegramIcon} alt=''/></a></div>
                    <div className={style.socialIcon}><a href=''><img src={likedinIcon} alt=''/></a></div>
                    <div className={style.socialIcon}><a href=''><img src={vkIcon} alt=''/></a></div>
                    <div className={style.socialIcon}><a href=''><img src={instagramIcon} alt=''/></a></div>
                </div>
                <h2 className={style.date}> @2023 All rights reserved</h2>
            </div>

        </div>
    );
}

export default Footer;