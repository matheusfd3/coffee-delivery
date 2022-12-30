import styled from 'styled-components'

export const SuccessContainer = styled.main`
  display: flex;
  align-items: flex-end;
  gap: 6.25rem;
  justify-content: space-between;
  padding-top: 5rem;
`
export const Title = styled.h1`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 2rem;
  line-height: 160%;
  color: ${(props) => props.theme['yellow-dark']};
`

export const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
`

export const ContainerInfos = styled.div`
  margin-top: 2.5rem;
  background: linear-gradient(
    to bottom right,
    ${(props) => props.theme.yellow},
    ${(props) => props.theme.purple}
  );
  padding: 1px;
  border-radius: 6px 36px;
`

export const Infos = styled.ul`
  padding: 2.5rem;
  background: ${(props) => props.theme.background};
  border-radius: inherit;

  list-style-type: none;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Info = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const CONTAINER_SVG_COLOR = {
  yellow: 'yellow',
  'yellow-dark': 'yellow-dark',
  purple: 'purple',
} as const

interface ContainerSVGProps {
  color: keyof typeof CONTAINER_SVG_COLOR
}

export const ContainerSVG = styled.div<ContainerSVGProps>`
  display: flex;
  padding: 0.5rem;
  border-radius: 50%;

  background: ${(props) => props.theme[CONTAINER_SVG_COLOR[props.color]]};

  svg {
    color: ${(props) => props.theme.background};
  }
`

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme['base-text']};
  line-height: 130%;

  span {
    font-weight: 400;
  }

  strong {
    font-weight: 700;
  }
`
