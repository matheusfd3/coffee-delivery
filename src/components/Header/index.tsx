import { HeaderContainer } from './styles'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'

export function Header() {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position)
  })

  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="" />
    </HeaderContainer>
  )
}
