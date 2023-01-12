import { Minus, Plus } from 'phosphor-react'
import { ActionButton, CounterContainer, CounterNumber } from './styles'

interface CounterProps {
  counter?: number
  setCoffeeCounter: (value: number) => void
}

export function Counter({ counter = 1, setCoffeeCounter }: CounterProps) {
  function handleIncrement() {
    setCoffeeCounter(counter + 1)
  }

  function handleDecrement() {
    if (counter === 1) return
    setCoffeeCounter(counter - 1)
  }

  return (
    <CounterContainer>
      <ActionButton type="button" onClick={handleDecrement}>
        <Minus size={14} weight="bold" />
      </ActionButton>
      <CounterNumber>{counter}</CounterNumber>
      <ActionButton type="button" onClick={handleIncrement}>
        <Plus size={14} weight="bold" />
      </ActionButton>
    </CounterContainer>
  )
}
