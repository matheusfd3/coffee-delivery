import styled from 'styled-components'

export const CoffeeCardContainer = styled.main`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.25rem;

  padding-bottom: 2rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  margin-bottom: 1.5rem;
`

export const Info = styled.div`
  display: flex;
  gap: 1.25rem;
`

export const CoffeeImage = styled.img`
  width: 4rem;
  height: 4rem;
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.span`
  color: ${(props) => props.theme['base-subtitle']};
`

export const Actions = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 0.5rem;
`

export const RemoveButton = styled.button`
  padding: 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  border: none;
  border-radius: 6px;

  text-transform: uppercase;
  font-size: 0.75rem;

  color: ${(props) => props.theme['base-text']};

  background: ${(props) => props.theme['base-button']};

  transition: color 0.2s, background 0.2s;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const Price = styled.strong`
  color: ${(props) => props.theme['base-text']};
`
