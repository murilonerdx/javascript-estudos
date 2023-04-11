import Image from 'next/image'
import {FormEvent, useContext, useState} from "react";
import Head from 'next/head'
import logoImg from'../public/logo.svg'
import style from '../styles/home.module.scss'
import {Input} from "../components/ui/Input";
import {Button} from "../components/ui/Button";
import Link from "next/link";
import {AuthContext} from "../context/AuthContext";

export default function Home() {
    const {signIn} =  useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loading, setLoading] = useState('')

    async function handleLogin(event: FormEvent){
        event.preventDefault()
        let data = {
            email: email,
            password: password
        }
        await signIn(data)
    }
    return (
        <>
            <Head>
                <title>
                    SujeitoPizza - Faça seu login
                </title>
            </Head>
            <div className={style.containerCenter}>
                <Image src={logoImg} alt="Logo Sujeito Pizzaria"/>
                <div className={style.login}>
                    <form onSubmit={handleLogin}>
                        <Input placeholder="Digite seu e-mail" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>

                        <Input placeholder="Digite sua senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

                        <Button type="submit" loading={false}>
                            Acessar
                        </Button>
                    </form>
                    <Link href="/signup" legacyBehavior>
                        <a className={style.text}>Não possui uma conta ? Cadastre-se</a>
                    </Link>
                </div>
            </div>
        </>
    )
}
