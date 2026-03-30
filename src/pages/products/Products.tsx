import { CardsProducts } from '../../components/cardsProducts/CardsProducts'
import { Link } from 'react-router-dom'
import cards from '../../components/cards/Cards'


export function Products(){
    return(
        <CardsProducts
            data={ cards }
            renderItem={(item) => (
                <div className='container_card' key={item.id}>
                    <img src={item.image} alt={item.name} style={{ width: item.width }} />
                    <h3>{item.name}</h3>
                    <span>{item.category}</span>
                    <Link to={`/detalhes/${item.id}`}>+ Detalhes</Link>
                </div>
            )}    
        />
    )
}