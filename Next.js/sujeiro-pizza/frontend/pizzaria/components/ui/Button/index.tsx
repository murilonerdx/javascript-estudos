import style from './style.module.scss'
import {ReactNode, ButtonHTMLAttributes} from 'react'

import {FaSpinner} from "react-icons/fa";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean,
    childern?: ReactNode
}

export function Button({loading, children, ...rest}: ButtonProps) {

    return (
        <button className={style.button} disabled={loading} {...rest}>
            <div className={style.buttonText}>
                {loading ? (
                    <FaSpinner color="#FFF" size={16}/>
                ) : (
                    <a className={style.buttonText}>
                        {children}
                    </a>
                )}
            </div>
        </button>
    )
}

