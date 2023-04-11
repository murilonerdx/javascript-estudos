import style from './style.module.scss'
import {ButtonHTMLAttributes, InputHTMLAttributes} from "react";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

interface InputPropos extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string,
    type: string
}

export function Input({...rest}: InputPropos) {
    return (
        <input className={style.input} {...rest}/>
    )
}

export function Textara({...rest}) {
    return (
        <textarea className={style.input} {...rest}></textarea>
    )
}