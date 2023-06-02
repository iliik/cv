import React, {FC} from 'react';
import {ContactsSetType} from "../common/data/dataSet";
import style from './Footer.module.scss'

interface ContactItemType {
    contact: ContactsSetType
}

export const ContactItem:FC<ContactItemType> = ({contact}) => {
    return (
        <div className={style.socialIcon}>
            <a href={contact.href}>
                <img src={contact.src} alt={contact.alt}/>
            </a>
        </div>
    );
};

