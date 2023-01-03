import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

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
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </span>
                <span>Farrapos - Porto Alegre, RS</span>
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
                <strong>Cartão de Crédito</strong>
              </InfoContent>
            </Info>
          </Infos>
        </ContainerInfos>
      </Section>
      <img src={successImage} alt="" />
    </SuccessContainer>
  )
}
