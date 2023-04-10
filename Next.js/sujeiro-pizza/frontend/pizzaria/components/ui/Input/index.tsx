import style from './style.module.scss'
interface InputPropos{
    placeholder: string,
    type: string
}
export function Input({...rest}: InputPropos){

    return(
        <input className={style.input} {...rest}/>
    )
}

export function Textara({...rest}){
    return(
        <textarea className={style.input} {...rest}></textarea>
    )
}