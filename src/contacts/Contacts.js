import React from 'react';
import style from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";


function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <form className={`${styleContainer.container} ${style.contactsBlock}`}>
                <h3 className={style.contact}>Контакты</h3>
                <div className={style.inputTextBlock}>
                    <input className={style.input}/>
                    <input className={style.input}/>
                    <textarea className={style.textarea}></textarea>
                </div>
                <button className={style.button}>Отправить</button>
            </form>
        </div>
    );
}

export default Contacts;