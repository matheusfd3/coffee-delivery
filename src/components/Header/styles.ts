import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
`

export const HomeLink = styled(NavLink)`
  display: flex;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const Location = styled.span`
  display: flex;
  align-items: center;

  gap: 0.25rem;
  padding: 0.5rem;

  border-radius: 6px;

  background: ${(props) => props.theme['purple-light']};

  font-size: 0.875rem;
  color: ${(props) => props.theme['purple-dark']};

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const ShoppingCartLink = styled(NavLink)`
  position: relative;

  display: flex;
  padding: 0.5rem;

  border-radius: 6px;

  background: ${(props) => props.theme['yellow-light']};

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

interface AmountCoffeeProps {
  hasItem: boolean
}

export const AmountCoffee = styled.span<AmountCoffeeProps>`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;

  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background: ${(props) => props.theme['yellow-dark']};

  visibility: ${(props) => (props.hasItem ? 'visible' : 'hidden')};

  color: ${(props) => props.theme.white};
  font-size: 0.75rem;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;
`
