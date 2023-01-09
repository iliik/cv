import React from 'react';
import style from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";


function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsBlock}`}>
                <h3 className={style.contact}>Контакты</h3>
                <form className={style.inputTextBlock}>
                    <input className={style.input}/>
                    <input className={style.input}/>
                    <textarea className={style.textarea}></textarea>
                </form>
                <button className={style.button}>Отправить</button>
            </div>
        </div>
    );
}

export default Contacts;