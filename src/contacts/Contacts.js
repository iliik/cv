import React from 'react';
import style from './Contacts.module.scss'
import Title from "../common/components/title/Title";
import {Button} from "../common/components/button/Button";
import {Roll} from "react-awesome-reveal";

function Contacts() {
    return (
        <div className={style.contactsBlock}>

            <div className={style.container}>

                <Title text={'Contacts'}/>
                <Roll>
                    <form className={style.form}>
                        <input className={style.formArea} type='text' placeholder='Name'/>
                        <input className={style.formArea} type='text' placeholder='e-mail'/>
                        <textarea className={style.messageArea} placeholder='Message'/>
                    </form>
                </Roll>
                <Button type='submit' text={'SEND MESSAGE'}/>

            </div>

        </div>
    );
}

export default Contacts;



