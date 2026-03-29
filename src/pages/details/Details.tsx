import { useParams } from "react-router-dom"
import cards from "../../components/cards/Cards"

import './details.css'


export function Details (){
    const { id } = useParams()

    const product = cards.find(item => item.id === Number(id))

    if(!product){
        return <h2>Produto não Encontrado</h2>
    }

    return(
        <div className="container-details" >
            <h1 className="meuh1">Página de Detalhes {id}</h1>
        </div>
    )
}