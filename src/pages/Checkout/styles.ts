import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  display: flex;
  gap: 2rem;

  margin: 2.5rem 0;
`

export const LeftSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;
`

export const Title = styled.strong`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.125rem;

  color: ${(props) => props.theme['base-subtitle']};
`

export const AddressContainer = styled.div`
  padding: 2.5rem;

  border-radius: 6px;

  background: ${(props) => props.theme['base-card']};
`

export const AddressHeaderContainer = styled.header`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const AddressHeader = styled.div`
  display: flex;
  flex-direction: column;

  line-height: 130%;

  span:first-child {
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span:last-child {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }
`

export const AddressInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 2rem;
`

export const DefaultInput = styled.input`
  padding: 0.75rem;
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;
  background-color: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};

  font-size: 0.875rem;
  max-width: 12.5rem;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
  }
`
export const SmallInput = styled(DefaultInput)`
  max-width: 3.75rem;
`

export const FillInput = styled(DefaultInput)`
  max-width: none;
  flex: 1;
`

export const SubAddressInputWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const PaymentContainer = styled.div`
  padding: 2.5rem;

  border-radius: 6px;

  background: ${(props) => props.theme['base-card']};
`

export const PaymentHeaderContainer = styled.header`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const PaymentHeader = styled.div`
  display: flex;
  flex-direction: column;

  line-height: 130%;

  span:first-child {
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span:last-child {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }
`

export const PaymentChoice = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  margin-top: 2rem;
`

export const PaymentChoiceLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  padding: 1rem;

  text-transform: uppercase;
  font-size: 0.75rem;
  color: ${(props) => props.theme['base-text']};

  background: ${(props) => props.theme['base-button']};

  border: 1px solid transparent;
  border-radius: 6px;

  transition: background-color 0.2s;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
    cursor: pointer;
  }

  svg {
    color: ${(props) => props.theme.purple};
  }

  input[type='radio'] {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
  }
`

export const RightSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
`

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme['base-card']};

  padding: 2.5rem;

  border-radius: 6px 44px;
`

export const PricesContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const PriceSection = styled.li`
  display: flex;
  justify-content: space-between;

  span {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
  }

  strong {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
  }
`

export const SubmitButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.75rem;

  border: none;
  border-radius: 6px;

  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};

  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 160%;

  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
