import styled from 'styled-components'

export const CoffeeMenuItemContainer = styled.main`
  width: 16rem;
  padding: 1.25rem 1.5rem;

  display: flex;
  flex-direction: column;

  align-items: center;

  background: ${(props) => props.theme['base-card']};

  border-radius: 6px 36px;
`

export const CoffeeImage = styled.img`
  margin-top: -2.5rem;
  width: 7.5rem;
  height: 7.5rem;
`

export const TagsContainer = styled.ul`
  list-style-type: none;
  margin-top: 0.75rem;

  display: flex;
  gap: 0.25rem;
`

export const Tag = styled.li`
  padding: 0.25rem 0.5rem;

  border-radius: 100px;

  background: ${(props) => props.theme['yellow-light']};

  font-size: 0.625rem;
  text-transform: uppercase;
  font-weight: 700;
  color: ${(props) => props.theme['yellow-dark']};
`

export const Title = styled.strong`
  margin-top: 1rem;

  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.25rem;
`

export const Description = styled.span`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-label']};

  text-align: center;
`

export const Footer = styled.div`
  margin-top: 2rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
`

export const Price = styled.span`
  font-size: 0.875rem;

  color: ${(props) => props.theme['base-text']};

  strong {
    font-family: 'Baloo 2';
    font-size: 1.5rem;
    font-weight: 800;

    color: ${(props) => props.theme['base-text']};
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const CartButton = styled.button`
  padding: 0.5rem;
  line-height: 0;

  background: ${(props) => props.theme['purple-dark']};

  border: none;
  border-radius: 6px;

  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme.purple};
  }

  svg {
    color: ${(props) => props.theme['base-card']};
  }
`
