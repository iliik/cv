import React from 'react';
import style from './Contacts.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/components/title/Title";
import {Button} from "../common/components/button/Button";


function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsBlock}`}>
                <Title text={'Contacts'}/>
                <form className={style.inputTextBlock}>
                    <input className={style.input} type='text'/>
                    <input className={style.input} type='text'/>
                    <textarea className={style.textarea}></textarea>
                </form>
                <Button text={'SEND MESSAGE'}/>
            </div>
        </div>
    );
}

export default Contacts;