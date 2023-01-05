import { ShoppingCart } from 'phosphor-react'
import { Counter } from '../../../../components/Counter'

import {
  Actions,
  CartButton,
  CoffeeImage,
  CoffeeMenuItemContainer,
  Description,
  Footer,
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
  imageName,
  tags,
  title,
  description,
  price,
}: CoffeeMenuItemProps) {
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
        <span>
          R${' '}
          <strong>
            {new Intl.NumberFormat('pt-BR', {
              minimumFractionDigits: 2,
            }).format(price)}
          </strong>
        </span>
        <Actions>
          <Counter />
          <CartButton>
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </Actions>
      </Footer>
    </CoffeeMenuItemContainer>
  )
}
