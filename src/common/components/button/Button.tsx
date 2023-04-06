import React from 'react';
import style from './Button.module.scss'

type ButtonType = {
    todo: string
    text: string
}

export function Button(props: ButtonType) {
    return <a href={props.todo} className={style.btn}>{props.text}</a>
}