import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './styles'

export function Counter() {
  return (
    <CounterContainer>
      <Minus size={14} weight="bold" />
      <span>1</span>
      <Plus size={14} weight="bold" />
    </CounterContainer>
  )
}
