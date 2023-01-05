import styled from 'styled-components'

export const CounterContainer = styled.main`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  padding: 0.5rem;

  background: ${(props) => props.theme['base-button']};

  border-radius: 6px;

  span {
    font-size: 1rem;
    color: ${(props) => props.theme['base-title']};
  }

  svg {
    cursor: pointer;
    color: ${(props) => props.theme.purple};

    transition: color 0.2s;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
