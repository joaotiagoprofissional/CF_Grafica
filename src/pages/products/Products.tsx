import { Link } from 'react-router-dom'

import cards from '../../components/cards/Cards'
import './products.css'

export function Products(){
    return(
        <section className='container_products'>
            {cards.map((card)=>(
                <div className='container_card' key={card.id}>
                    <img src={card.image} alt={card.name} style={{ width: card.width }} />
                    <h3>{card.name}</h3>
                    <span>{card.category}</span>
                    <Link to={`/detalhes/${card.id}`}>+ Detalhes</Link>
                </div>
            ))}
        </section>
    )
}