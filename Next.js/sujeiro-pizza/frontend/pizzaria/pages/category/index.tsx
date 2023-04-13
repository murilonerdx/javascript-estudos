import {Header} from "../../components/ui/Header";
import styles from './styles.module.scss'
import {FormEvent, useEffect, useState} from "react";
import {api} from "../../services/apiClient";
import {parseCookies} from "nookies";
import {signOut} from "../../context/AuthContext";
import {setupAPIClient} from "../../services/api";
import {toast} from "react-toastify";
import Router from "next/router";
import {canSSRAuth} from "../../utils/canSSRAuth";

export default function Category() {

    const [categories, setCategories] = useState([])
    const [name, setName] = useState('')
    async function handleRegister(event: FormEvent){
        event.preventDefault();

        if(name === ''){
            toast.warning("Existe campos vazios")
            return;
        }

        await api.post("/category", {
            name: name
        }).then(() => toast.success(`Categoria ${name} criada com sucesso`)).catch(() => toast.error("Erro ao tentar criar categoria"))

        await Router.push("/")
    }

    useEffect(() => {
        api.get("/category").then(response => setCategories(response.data))
    }, [])

    return (
        <>
            <head>
                <title>
                    Nova categoria - Sujeito Pizzaria
                </title>
            </head>

                <div>
                    <Header/>
                    <main className={styles.container}>
                        <form className={styles.form} onSubmit={handleRegister}>
                            <input
                                type="text"
                                placeholder="Digite o nome da categoria"
                                className={styles.input}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <button className={styles.buttonAdd} type="submit">
                                Cadastrar
                            </button>
                        </form>
                    </main>
                </div>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {

    return {
        props: {}
    }
})