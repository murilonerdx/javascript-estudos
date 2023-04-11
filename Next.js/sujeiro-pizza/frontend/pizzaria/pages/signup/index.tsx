import Head from "next/head";
import style from "../styles/home.module.scss";
import Image from "next/image";
import logoImg from "../public/logo.svg";
import {Input} from "../../components/ui/Input";
import {Button} from "../../components/ui/Button";
import Link from "next/link";

export default function Signup() {

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
                    <h1>
                        Criando sua conta
                    </h1>
                    <form>
                        <Input placeholder="Digite seu e-mail" type="text"/>
                        <Input placeholder="Digite sua empresa" type="text"/>
                        <Input placeholder="Digite sua senha" type="password"/>

                        <Button type="button" loading={false}>
                            Cadastrar
                        </Button>
                    </form>
                    <Link href="/" legacyBehavior>
                        <a className={style.text}>Já tenho uma conta ? Acessar</a>
                    </Link>
                </div>
            </div>
        </>
    )
}