import React from 'react';
import style from './Button.module.scss'

export function Button(props) {
    return <a href={props.todo}  className={style.btn}>{props.text}</a>
}