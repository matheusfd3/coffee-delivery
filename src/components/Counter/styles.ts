import styled from 'styled-components'

export const CounterContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;

  width: 4.5rem;
  padding: 0.5rem;

  background: ${(props) => props.theme['base-button']};

  border-radius: 6px;

  svg {
    cursor: pointer;
    color: ${(props) => props.theme.purple};

    transition: color 0.2s;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`

export const CounterNumber = styled.span`
  font-size: 1rem;
  color: ${(props) => props.theme['base-title']};
`

export const ActionButton = styled.button`
  display: flex;
  border: none;
  background: transparent;
`
