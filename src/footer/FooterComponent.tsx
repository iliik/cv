import React from 'react';
import style from './Footer.module.scss'
import Title from "../common/components/title/Title";
import {Bounce, Slide} from "react-awesome-reveal";
import {ContactsSet} from "../common/data/dataSet";
import {ContactItem} from "../contacts/ContactItem";

function Footer() {
    return (
        <div className={style.footer}>

            <div className={style.container}>
                <Slide>
                    <Title text={'Ilya Koshelevich'}/>
                </Slide>
                <Bounce>
                    <div className={style.socialIcons}>
                        {/*<div className={style.socialIcon}><a href='https://t.me/koshelben'><img src={telegramIcon}*/}
                        {/*                                                                        alt=''/></a></div>*/}
                        {/*<div className={style.socialIcon}><a*/}
                        {/*    href='https://www.linkedin.com/in/%D0%B8%D0%BB%D1%8C%D1%8F-%D0%BA%D0%BE%D1%88%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D1%87-298976238/'><img*/}
                        {/*    src={linkedinIcon} alt=''/></a></div>*/}
                        {/*<div className={style.socialIcon}><a href='https://vk.com/id203437843'><img src={vkIcon}*/}
                        {/*                                                                            alt=''/></a></div>*/}
                        {/*<div className={style.socialIcon}><a*/}
                        {/*    href='https://www.instagram.com/ilya_koshelben/?igshid=YmMyMTA2M2Y%3D'><img*/}
                        {/*    src={instagramIcon} alt=''/></a></div>*/}
                        {ContactsSet.map((contact, index) => <ContactItem key={index} contact={contact}/>)}
                    </div>
                </Bounce>


                <h2 className={style.date}> @2023 All rights reserved</h2>
            </div>


        </div>
    );
}

export default Footer;

