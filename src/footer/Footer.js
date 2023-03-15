import React from 'react';
import style from './Footer.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/components/title/Title";
import telegramIcon from '../assets/icon/telegram.svg'
import likednIcon from '../assets/icon/LinkedIn-Icon-Logo.wine.svg'
import vkIcon from '../assets/icon/vk-circled.png'
import instagramIcon from '../assets/icon/Capture001.png'


function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <Title text={'Ilya Kashalevich'}/>
                <div className={style.socialIcons}>
                    <div className={style.socialIcon}><a href=''><img src={telegramIcon} alt=''/></a></div>
                    <div className={style.socialIcon}><a href=''><img src={likednIcon} alt=''/></a></div>
                    <div className={style.socialIcon}><a href='https://vk.com/id203437843'><img src={vkIcon} alt=''/></a></div>
                    <div className={style.socialIcon}><a href=''><img src={instagramIcon} alt=''/></a></div>
                </div>
                <h2 className={style.date}> @2023 All rights reserved</h2>
            </div>

        </div>
    );
}

export default Footer;