import {Header} from "../../components/ui/Header";
import styles from './styles.module.scss'
import {canSSRAuth} from "../../utils/canSSRAuth";
import {FiUpload} from "react-icons/fi"
import {ChangeEvent, useState} from "react";


export default function Product() {

    const [avatarUrl, setAvatarUrl] = useState(null)
    const [imageAvatar, setImageAvatar] = useState(null)

    function handleFile(event: ChangeEvent<HTMLInputElement>){
        if(!event.target.files){
            return;
        }

        const image = event.target.files[0];

        if(!image){
            return;
        }

        if(image.type === 'image/jpeg' || image.type === 'image/png'){
            setAvatarUrl(image)
            setImageAvatar(URL.createObjectURL(event.target.files[0]))
        }
    }
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

                        <label className={styles.labelAvatar}>
                            <span>
                                <FiUpload size={25} color="#FFF"/>
                            </span>
                            <input type="file" accept="iamge/png, image/jpeg" onChange={handleFile}/>
                            {avatarUrl && (
                                <img className={styles.preview} src={imageAvatar} alt="Foto do produto" width={250} height={250}/>
                            )}
                        </label>
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