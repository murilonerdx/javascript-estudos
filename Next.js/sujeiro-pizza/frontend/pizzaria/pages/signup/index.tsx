import Head from 'next/head'
import Image from 'next/image';
import styles from '../../styles/home.module.scss';

import logoImg from '../../public/logo.svg';

import {Input} from '../../components/ui/Input'
import {Button} from '../../components/ui/Button'

import Link from 'next/link';
import {FormEvent, useContext, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import {toast} from "react-toastify";

export default function SignUp() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [showValidEmail, setValidEmail] = useState(false)
    const [loginIsValid, setIsValid] = useState(true)
    const {signUp} = useContext(AuthContext)

    const validateEmail = () => {
        if (email != '' && email
            .match(
                /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
            )) {
            setValidEmail(false);
        } else {
            setValidEmail(true);
        }

        setLoading(false)
    }

    async function handleSignUp(event: FormEvent) {
        event.preventDefault()

        validateEmail()

        if(showValidEmail == true){
            return;
        }


        if (name === '' || email === '' || password === '') {
            toast.warning(`Existe parametros varios`)
            return;
        }

        let data = {
            name, email, password
        }

        await signUp(data).then().catch(() => setLoading(false))
    }

    return (
        <>
            <Head>
                <title>Faça seu cadastro agora!</title>
            </Head>
            <div className={styles.containerCenter}>
                <Image src={logoImg} alt="Logo Sujeito Pizzaria"/>

                <div className={styles.login}>
                    <h1>Criando sua conta</h1>

                    <form onSubmit={handleSignUp}>
                        <Input
                            placeholder="Digite seu nome"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <Input
                            placeholder="Digite seu email"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {showValidEmail == true ? <h4 className={styles.invalid}>e-mail invalido</h4> : ''}

                        <Input
                            placeholder="Sua senha"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <Button
                            type="submit"
                            loading={loading}
                        >
                            Cadastrar
                        </Button>
                    </form>

                    <Link href="/" legacyBehavior>
                        <a className={styles.text}>Já possui uma conta? Faça login!</a>
                    </Link>

                </div>
            </div>
        </>
    )
}
