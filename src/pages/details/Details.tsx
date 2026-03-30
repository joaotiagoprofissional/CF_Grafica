import { useParams } from "react-router-dom"
import { useState } from "react"
import cards from "../../components/cards/Cards"
import { CardsProducts } from "../../components/cardsProducts/CardsProducts"


import './details.css'


export function Details (){
    const { id } = useParams()

    const product = cards.find(item => item.id === Number(id))

    const [ selected, setSelected ] = useState<number | null>(null)

    if(!product){
        return <h2>Produto não Encontrado</h2>
    }

    return (
    <div>
      <h1>{product.name}</h1>

      <h2>{product.question ?? "Escolha uma opção"}</h2>

      <CardsProducts
        data={product.choices ?? []}
        renderItem={(item, index) => (
          <div
            key={index}
            className={`container_card ${selected === index ? 'active' : ''}`}
            onClick={() => setSelected(index)}
          >
            <img src={item.image} alt={item.label} />
            <h3>{item.label}</h3>
          </div>
        )}
      />
    </div>
  )
}