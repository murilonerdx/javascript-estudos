import {useEffect, useState} from "react";
import api from '../../services/api'
import {Link} from "react-router-dom";
import './home.css'

function Home(){
    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "ffa4a015932fbb6f9ed5df993995b37b",
                    language: "pt-BR",
                    page: 1,
                }
            })

            setFilmes(response.data.results)
            setLoading(false)
        }

        loadFilmes().then()
    })

    if(loading){
        return(
            <div className="loading">
                <h2>Carregando filmes...</h2>
            </div>
        )
    }


    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme ) => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt=""/>
                            <Link to={`/filme/${filme.id}`}>Acessar filme</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home