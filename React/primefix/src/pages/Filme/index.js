import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import api from "../../services/api";
import './filme.css'
import {toast} from 'react-toastify'

function Filme() {
    const {id} = useParams()
    const [filme, setFilme] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "ffa4a015932fbb6f9ed5df993995b37b",
                    language: "pt-BR",
                    page: 1,
                }
            }).then((response) => {
                setFilme(response.data)
                setLoading(false)
            })
                .catch()
        }


        loadFilme().then()
        return () => {

        }
    })

    function salvarFilme(){
        const minhaLista = localStorage.getItem("@primeflix")

        let filmesSalvos = JSON.parse(minhaLista) || []
        const hasFilme = filmesSalvos.some((filmesSalvo) => filmesSalvo.id == filme.id)

        if(hasFilme){
            toast.warn("Esse filme já está na lista")
            return
        }

        filmesSalvos.push(filme)
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos))
        toast.success("Filme salvo com sucesso")
    }

    if (loading) {
        return (
            <div className="loading">
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    return (
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}/>
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average} / 10</strong>

            <div className="area-buttons">
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a href="#">
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Filme