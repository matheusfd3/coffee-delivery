import { useContext } from 'react'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import { FormContext } from '../../contexts/FormContext'

import {
  ContainerInfos,
  ContainerSVG,
  Info,
  InfoContent,
  Infos,
  Section,
  SubTitle,
  SuccessContainer,
  Title,
} from './styles'

import successImage from '../../assets/success-image.svg'

export function Success() {
  const { form } = useContext(FormContext)

  return (
    <SuccessContainer>
      <Section>
        <Title>Uhu! Pedido confirmado</Title>
        <SubTitle>
          Agora é só aguardar que logo o café chegará até você
        </SubTitle>
        <ContainerInfos>
          <Infos>
            <Info>
              <ContainerSVG color="purple">
                <MapPin size={16} weight="fill" />
              </ContainerSVG>
              <InfoContent>
                <span>
                  Entrega em{' '}
                  <strong>{`${form.street}, ${form.streetNumber}`}</strong>
                </span>
                <span>{`${form.district} - ${form.city}, ${form.state}`}</span>
              </InfoContent>
            </Info>
            <Info>
              <ContainerSVG color="yellow">
                <Timer size={16} weight="fill" />
              </ContainerSVG>
              <InfoContent>
                <span>Previsão de entrega</span>
                <strong>20 min - 30 min</strong>
              </InfoContent>
            </Info>
            <Info>
              <ContainerSVG color="yellow-dark">
                <CurrencyDollar size={16} />
              </ContainerSVG>
              <InfoContent>
                <span>Pagamento na entrega</span>
                {form.paymentMethod === 'Credit' && (
                  <strong>Cartão de Crédito</strong>
                )}

                {form.paymentMethod === 'Debit' && (
                  <strong>Cartão de Débito</strong>
                )}

                {form.paymentMethod === 'Cash' && <strong>Dinheiro</strong>}
              </InfoContent>
            </Info>
          </Infos>
        </ContainerInfos>
      </Section>
      <img src={successImage} alt="" />
    </SuccessContainer>
  )
}
