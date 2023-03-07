import {useEffect, useState} from "react";
import api from '../../services/api'

function Home(){
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "ffa4a015932fbb6f9ed5df993995b37b",
                    language: "pt-BR",
                    page: 1,
                }
            })

            console.log(response)
        }

        loadFilmes().then()
    })


    return(
        <div>
            <h1>Bem vindo a Home</h1>
        </div>
    )
}

export default Home