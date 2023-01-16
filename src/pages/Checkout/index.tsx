import { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { CartContext } from '../../contexts/CartContext'

import { CoffeeCardList } from './components/CoffeeCardList'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

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
  OptionalInputContainer,
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
import { FormContext } from '../../contexts/FormContext'
import { useNavigate } from 'react-router-dom'

const formValidationSchema = zod.object({
  cep: zod.string().min(8).max(9),
  street: zod.string().min(1),
  streetNumber: zod.string().min(1),
  complement: zod.string(),
  district: zod.string().min(1),
  city: zod.string().min(1),
  state: zod.string().length(2),
  paymentMethod: zod.enum(['Credit', 'Debit', 'Cash', '']),
})

type FormValidationData = zod.infer<typeof formValidationSchema>

export function Checkout() {
  const { coffees } = useContext(CartContext)
  const { form, setNewValuesForm } = useContext(FormContext)

  const formValidation = useForm<FormValidationData>({
    resolver: zodResolver(formValidationSchema),
    values: {
      cep: form.cep,
      street: form.street,
      streetNumber: form.streetNumber,
      complement: form.complement,
      district: form.district,
      city: form.city,
      state: form.state,
      paymentMethod: form.paymentMethod,
    },
  })

  const { handleSubmit, register, watch } = formValidation

  const navigate = useNavigate()

  function handleCreateNewOrder(data: FormValidationData) {
    if (coffees.length === 0 || data.paymentMethod === '') return
    setNewValuesForm(data)
    navigate('/success')
  }

  const totalItems = coffees.reduce((accumulator, coffee) => {
    return accumulator + coffee.price * coffee.amount
  }, 0)

  const deliveryFee = coffees.length ? 3.5 : 0

  const totalItemsWithDeliveryFee = totalItems + deliveryFee

  const watchPaymentMethod = watch('paymentMethod')

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleCreateNewOrder)}>
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
            <DefaultInput placeholder="CEP" type="text" {...register('cep')} />
            <FillInput placeholder="Rua" type="text" {...register('street')} />
            <SubAddressInputWrapper>
              <DefaultInput
                placeholder="Número"
                type="text"
                {...register('streetNumber')}
              />
              <OptionalInputContainer>
                <FillInput
                  placeholder="Complemento"
                  type="text"
                  {...register('complement')}
                />
                <span>Opcional</span>
              </OptionalInputContainer>
            </SubAddressInputWrapper>
            <SubAddressInputWrapper>
              <DefaultInput
                placeholder="Bairro"
                type="text"
                {...register('district')}
              />
              <FillInput
                placeholder="Cidade"
                type="text"
                {...register('city')}
              />
              <SmallInput placeholder="UF" type="text" {...register('state')} />
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
            <PaymentChoiceLabel isActive={watchPaymentMethod === 'Credit'}>
              <CreditCard size={16} />
              Cartão de Crédito
              <input
                type="radio"
                value="Credit"
                {...register('paymentMethod')}
              />
            </PaymentChoiceLabel>
            <PaymentChoiceLabel isActive={watchPaymentMethod === 'Debit'}>
              <Bank size={16} />
              Cartão de Débito
              <input
                type="radio"
                value="Debit"
                {...register('paymentMethod')}
              />
            </PaymentChoiceLabel>
            <PaymentChoiceLabel isActive={watchPaymentMethod === 'Cash'}>
              <Money size={16} />
              Dinheiro
              <input type="radio" value="Cash" {...register('paymentMethod')} />
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
