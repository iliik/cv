import React from 'react';
import style from './Contacts.module.scss'
import Title from "../common/components/title/Title";
import {Button} from "../common/components/button/Button";
import {Slide} from "react-awesome-reveal";

function Contacts() {
    return (
        <div id='contact' className={style.contactsBlock}>
            <div className={style.container}>
                <Slide>
                    <Title text={'Contacts'}/>

                    <form className={style.form} >
                        <input className={style.formArea} type='text' placeholder='Name'/>
                        <input className={style.formArea} type='text' placeholder='e-mail'/>
                        <textarea className={style.messageArea} placeholder='Message'/>
                    </form>


                    <Button type='submit' text={'SEND MESSAGE'}/>
                </Slide>

            </div>

        </div>
    );
}

export default Contacts;



