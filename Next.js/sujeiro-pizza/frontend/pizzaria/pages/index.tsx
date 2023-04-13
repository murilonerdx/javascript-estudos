import Image from 'next/image'
import {FormEvent, useContext, useState} from "react";
import Head from 'next/head'
import logoImg from'../public/logo.svg'
import style from '../styles/home.module.scss'
import {Input} from "../components/ui/Input";
import {Button} from "../components/ui/Button";
import Link from "next/link";
import {AuthContext} from "../context/AuthContext";
import {canSSRGuest} from "../utils/canSSRGuest";
import {toast} from "react-toastify";
import styles from "../styles/home.module.scss";

export default function Home() {
    const {signIn} =  useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loading, setLoading] = useState(false)

    async function handleLogin(event: FormEvent){
        event.preventDefault()

        if(email === '' || password === ''){
            toast.warning("Existe campos vazios")
            return;
        }

        let data = {
            email: email,
            password: password
        }

        setLoading(true);
        await signIn(data)

        setLoading(false)
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
                        {email == '' ? <h4 className={styles.invalid}>Campo vazio *</h4> : ''}

                        <Input placeholder="Digite sua senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        {password == '' ? <h4 className={styles.invalid}>Campo vazio *</h4> : ''}

                        <Button type="submit" loading={loading}>
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

export const getServerSideProps = canSSRGuest(async (ctx) => {

    return {
        props: {}
    }
})
