import React from 'react';
import style from './Contacts.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/components/title/Title";


function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsBlock}`}>
                <Title text={'Contacts'}/>
                <form className={style.inputTextBlock}>
                    <input className={style.input} type='text' />
                    <input className={style.input} type='text'/>
                    <textarea className={style.textarea} ></textarea>
                </form>
                <button className={style.button} type='submit'>SEND MESSAGE</button>
            </div>
        </div>
    );
}

export default Contacts;