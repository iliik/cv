import React from 'react';
import style from './Button.module.scss'

export function Button(props) {
    return (
        <a href='' className={style.btn}>{props.text}</a>
    )
}