import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import homeImage from '../../assets/home-image.svg'
import { CoffeeMenu } from './components/CoffeeMenu'

import {
  ContainerSVG,
  Header,
  Item,
  Items,
  Section,
  Subtitle,
  Title,
  TitleCoffee,
} from './styles'

export function Home() {
  return (
    <main>
      <Header>
        <div>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Subtitle>
          <Items>
            <Item>
              <ContainerSVG color="yellow-dark">
                <ShoppingCart size={16} weight="fill" />
              </ContainerSVG>
              Compra simples e segura
            </Item>
            <Item>
              <ContainerSVG color="black">
                <Package size={16} weight="fill" />
              </ContainerSVG>
              Embalagem mantém o café intacto
            </Item>
            <Item>
              <ContainerSVG color="yellow">
                <Timer size={16} weight="fill" />
              </ContainerSVG>
              Entrega rápida e rastreada
            </Item>
            <Item>
              <ContainerSVG color="purple">
                <Coffee size={16} weight="fill" />
              </ContainerSVG>
              O café chega fresquinho até você
            </Item>
          </Items>
        </div>
        <img src={homeImage} alt="" />
      </Header>
      <Section>
        <TitleCoffee>Nossos cafés</TitleCoffee>
        <CoffeeMenu />
      </Section>
    </main>
  )
}
