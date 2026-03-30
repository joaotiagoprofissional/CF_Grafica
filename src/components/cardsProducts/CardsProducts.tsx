import type { Card } from '../../components/cards/Cards'

import './cardsProducts.css'

type Props<T> = {
  data: T[]
  renderItem: (item: T, index: number) => React.ReactNode
}

export function CardsProducts<T>({ data, renderItem }: Props<T>) {
  return (
    <section className="container_products">
      {data.map((item, index) => renderItem(item, index))}
    </section>
  )
}

