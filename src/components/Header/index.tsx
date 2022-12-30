import { MapPin, ShoppingCart } from 'phosphor-react'

import {
  Actions,
  HeaderContainer,
  ShoppingCartLink,
  Location,
  HomeLink,
} from './styles'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'

export function Header() {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position)
  })

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
        </ShoppingCartLink>
      </Actions>
    </HeaderContainer>
  )
}
