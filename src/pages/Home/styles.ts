import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  gap: 3.5rem;

  padding: 5.75rem 0;
`

export const Title = styled.h1`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 3rem;

  line-height: 130%;

  color: ${(props) => props.theme['base-title']};
`

export const Subtitle = styled.h2`
  margin-top: 1rem;

  font-size: 1.25rem;
  font-weight: 400;

  color: ${(props) => props.theme['base-subtitle']};
`

export const Items = styled.ul`
  display: grid;
  grid-gap: 1.25rem 2.5rem;
  grid-template-columns: repeat(auto-fit, minmax(12.5rem, auto));

  margin-top: 4.125rem;

  list-style-type: none;
`

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${(props) => props.theme['base-text']};
`

const CONTAINER_SVG_COLOR = {
  yellow: 'yellow',
  'yellow-dark': 'yellow-dark',
  black: 'base-text',
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

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  padding-top: 2rem;
  padding-bottom: 3rem;
`

export const TitleCoffee = styled.strong`
  font-family: 'Baloo 2';
  font-size: 2rem;

  margin-bottom: 3.375rem;

  color: ${(props) => props.theme['base-subtitle']};
`
