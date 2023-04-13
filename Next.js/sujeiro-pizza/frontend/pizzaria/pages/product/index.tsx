import {Header} from "../../components/ui/Header";
import styles from './styles.module.scss'
import {canSSRAuth} from "../../utils/canSSRAuth";


export default function Product() {
    return (
        <>
            <head>
                <title>Produto - Sujeito Pizzaria</title>
            </head>
            <div>
                <Header/>

                <main className={styles.container}>
                    <h1>Novo Produto</h1>
                    <form className={styles.form}>
                        <select>
                            <option>
                                Pizza
                            </option>
                            <option>
                                Bebidas
                            </option>
                        </select>

                        <input type="text" className={styles.input} placeholder="Digite o nome do produto"/>
                        <input type="text" className={styles.input} placeholder="Preço do produto"/>

                        <textarea className={styles.input} placeholder="Descreva seu produto..."/>

                        <button className={styles.buttonAdd}>
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