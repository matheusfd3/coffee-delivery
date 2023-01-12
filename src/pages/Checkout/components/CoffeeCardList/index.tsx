import { useContext } from 'react'

import { CartContext } from '../../../../contexts/CartContext'

import { CoffeeCard } from '../CoffeeCard'
import { CoffeeCardListContainer } from './styles'

export function CoffeeCardList() {
  const { coffees } = useContext(CartContext)

  return (
    <CoffeeCardListContainer>
      {coffees.map((coffee) => (
        <CoffeeCard
          key={coffee.id}
          id={coffee.id}
          imageName={coffee.imageName}
          title={coffee.title}
          price={coffee.price}
          counter={coffee.amount}
        />
      ))}
    </CoffeeCardListContainer>
  )
}
