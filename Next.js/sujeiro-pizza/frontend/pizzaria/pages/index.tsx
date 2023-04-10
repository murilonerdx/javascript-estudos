import Image from 'next/image'
import Head from 'next/head'
import logoImg from'../public/logo.svg'
import style from '../styles/home.module.scss'
import {Input} from "@/components/ui/Input";
import {Button} from "@/components/ui/Button";

export default function Home() {

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
                    <form>
                        <Input placeholder="Digite seu e-mail" type="text"/>

                        <Input placeholder="Digite sua senha" type="password"/>

                        <Button type="button" loading={false}>
                            Cadastrar
                        </Button>
                    </form>
                    <a className={style.text}>Não possui uma conta ? Cadastre-se</a>
                </div>
            </div>
        </>
    )
}
