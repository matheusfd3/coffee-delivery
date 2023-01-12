import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

import { CoffeeCardList } from './components/CoffeeCardList'
import {
  AddressContainer,
  CheckoutContainer,
  PaymentContainer,
  Title,
  FillInput,
  SmallInput,
  LeftSideContainer,
  RightSideContainer,
  AddressInputWrapper,
  DefaultInput,
  SubAddressInputWrapper,
  AddressHeaderContainer,
  AddressHeader,
  PaymentHeaderContainer,
  PaymentHeader,
  PaymentChoice,
  PaymentChoiceLabel,
  CoffeeCardContainer,
  PricesContainer,
  PriceSection,
  SubmitButton,
} from './styles'

export function Checkout() {
  const { coffees } = useContext(CartContext)

  const totalItems = coffees.reduce((accumulator, coffee) => {
    return accumulator + coffee.price * coffee.amount
  }, 0)

  const deliveryFee = coffees.length ? 3.5 : 0

  const totalItemsWithDeliveryFee = totalItems + deliveryFee

  return (
    <CheckoutContainer>
      <LeftSideContainer>
        <Title>Complete seu pedido</Title>

        <AddressContainer>
          <AddressHeaderContainer>
            <MapPinLine size={22} />
            <AddressHeader>
              <span>Endereço de Entrega</span>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </AddressHeader>
          </AddressHeaderContainer>
          <AddressInputWrapper>
            <DefaultInput name="cep" placeholder="CEP" type="text" />
            <FillInput name="street" placeholder="Rua" type="text" />
            <SubAddressInputWrapper>
              <DefaultInput
                name="street-number"
                placeholder="Número"
                type="text"
              />
              <FillInput
                name="complement"
                placeholder="Complemento"
                type="text"
              />
            </SubAddressInputWrapper>
            <SubAddressInputWrapper>
              <DefaultInput name="district" placeholder="Bairro" type="text" />
              <FillInput name="city" placeholder="Cidade" type="text" />
              <SmallInput name="state" placeholder="UF" type="text" />
            </SubAddressInputWrapper>
          </AddressInputWrapper>
        </AddressContainer>
        <PaymentContainer>
          <PaymentHeaderContainer>
            <CurrencyDollar size={22} />
            <PaymentHeader>
              <span>Pagamento</span>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </PaymentHeader>
          </PaymentHeaderContainer>
          <PaymentChoice>
            <PaymentChoiceLabel>
              <CreditCard size={16} />
              Cartão de Crédito
              <input type="radio" name="payment-method" value="credit-card" />
            </PaymentChoiceLabel>
            <PaymentChoiceLabel>
              <Bank size={16} />
              Cartão de Débito
              <input type="radio" name="payment-method" value="debit-card" />
            </PaymentChoiceLabel>
            <PaymentChoiceLabel>
              <Money size={16} />
              Dinheiro
              <input type="radio" name="payment-method" value="cash" />
            </PaymentChoiceLabel>
          </PaymentChoice>
        </PaymentContainer>
      </LeftSideContainer>
      <RightSideContainer>
        <Title>Cafés selecionados</Title>
        <CoffeeCardContainer>
          <CoffeeCardList />
          <PricesContainer>
            <PriceSection>
              <span>Total de itens</span>
              <span>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(totalItems)}
              </span>
            </PriceSection>
            <PriceSection>
              <span>Entrega</span>
              <span>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(deliveryFee)}
              </span>
            </PriceSection>
            <PriceSection>
              <strong>Total</strong>
              <strong>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(totalItemsWithDeliveryFee)}
              </strong>
            </PriceSection>
          </PricesContainer>
          <SubmitButton type="submit">Confirmar pedido</SubmitButton>
        </CoffeeCardContainer>
      </RightSideContainer>
    </CheckoutContainer>
  )
}
