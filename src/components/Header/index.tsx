import { MapPin, ShoppingCart } from 'phosphor-react'

import {
  Actions,
  HeaderContainer,
  ShoppingCartLink,
  Location,
  HomeLink,
  AmountCoffee,
} from './styles'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position)
    // https://www.geoapify.com/
  })

  const { coffees } = useContext(CartContext)

  return (
    <HeaderContainer>
      <HomeLink to="/" title="Home">
        <img src={logoCoffeeDelivery} alt="" />
      </HomeLink>
      <Actions>
        <Location>
          <MapPin size={22} weight="fill" />
          Fortaleza, CE
        </Location>
        <ShoppingCartLink to="/checkout" title="Checkout">
          <ShoppingCart size={22} weight="fill" />
          <AmountCoffee hasItem={!!coffees.length}>
            {coffees.length}
          </AmountCoffee>
        </ShoppingCartLink>
      </Actions>
    </HeaderContainer>
  )
}
