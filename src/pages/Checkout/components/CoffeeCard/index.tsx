import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { Counter } from '../../../../components/Counter'
import { CartContext } from '../../../../contexts/CartContext'
import {
  Actions,
  CoffeeCardContainer,
  CoffeeImage,
  Details,
  Info,
  Price,
  RemoveButton,
  Title,
} from './styles'

interface CoffeeCardProps {
  id: number
  imageName: string
  title: string
  price: number
  counter: number
}

export function CoffeeCard({
  id,
  imageName,
  title,
  price,
  counter,
}: CoffeeCardProps) {
  const { setAmountCoffee, removeCoffee } = useContext(CartContext)

  function setCoffeeCounter(value: number) {
    setAmountCoffee(id, value)
  }

  function handleRemoveCoffee() {
    removeCoffee(id)
  }

  const imagePath = 'src/assets/coffee/'
  return (
    <CoffeeCardContainer>
      <Info>
        <CoffeeImage
          src={imagePath + imageName}
          alt={`Foto da bebida ${title}`}
        />
        <Details>
          <Title>{title}</Title>
          <Actions>
            <Counter counter={counter} setCoffeeCounter={setCoffeeCounter} />
            <RemoveButton type="button" onClick={handleRemoveCoffee}>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </Actions>
        </Details>
      </Info>
      <Price>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price)}
      </Price>
    </CoffeeCardContainer>
  )
}
