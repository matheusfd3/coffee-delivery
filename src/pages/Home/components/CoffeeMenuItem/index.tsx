import { ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { Counter } from '../../../../components/Counter'
import { CartContext } from '../../../../contexts/CartContext'
import { CoffeeCartItem } from '../../../../reducers/cart/reducer'

import {
  Actions,
  CartButton,
  CoffeeImage,
  CoffeeMenuItemContainer,
  Description,
  Footer,
  Price,
  Tag,
  TagsContainer,
  Title,
} from './styles'

interface CoffeeMenuItemProps {
  id: number
  imageName: string
  tags: string[]
  title: string
  description: string
  price: number
}

export function CoffeeMenuItem({
  id,
  imageName,
  tags,
  title,
  description,
  price,
}: CoffeeMenuItemProps) {
  const { addNewCoffee } = useContext(CartContext)
  const [coffeeAmount, setCoffeeAmount] = useState(1)

  function setCoffeeCounter(value: number) {
    setCoffeeAmount(value)
  }

  function handleAddCoffeeToCart() {
    const coffeeCartItem: CoffeeCartItem = {
      id,
      imageName,
      price,
      title,
      amount: coffeeAmount,
    }
    addNewCoffee(coffeeCartItem)
  }

  const imagePath = 'src/assets/coffee/'

  return (
    <CoffeeMenuItemContainer>
      <CoffeeImage
        src={imagePath + imageName}
        alt={`Foto da bebida ${title}`}
      />
      <TagsContainer>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagsContainer>
      <Title>{title}</Title>
      <Description> {description}</Description>
      <Footer>
        <Price>
          R${' '}
          <strong>
            {new Intl.NumberFormat('pt-BR', {
              minimumFractionDigits: 2,
            }).format(price)}
          </strong>
        </Price>
        <Actions>
          <Counter counter={coffeeAmount} setCoffeeCounter={setCoffeeCounter} />
          <CartButton type="button" onClick={handleAddCoffeeToCart}>
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </Actions>
      </Footer>
    </CoffeeMenuItemContainer>
  )
}
