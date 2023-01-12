import { createContext, ReactNode, useEffect, useReducer } from 'react'
import {
  addNewCoffeeAction,
  removeCoffeeAction,
  setAmountCoffeeAction,
} from '../reducers/cart/actions'
import { CartReducer, CoffeeCartItem } from '../reducers/cart/reducer'

interface CartContextType {
  coffees: CoffeeCartItem[]
  addNewCoffee: (data: CoffeeCartItem) => void
  removeCoffee: (id: number) => void
  setAmountCoffee: (id: number, amount: number) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(CartReducer, null, () => {
    const storedStateAsJSON = localStorage.getItem(
      '@ignite-coffee-delivery:cartState-1.0.0',
    )

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }

    return {
      coffees: [],
    }
  })

  const { coffees } = cartState

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@ignite-coffee-delivery:cartState-1.0.0', stateJSON)
  }, [cartState])

  function addNewCoffee(data: CoffeeCartItem) {
    dispatch(addNewCoffeeAction(data))
  }

  function removeCoffee(id: number) {
    dispatch(removeCoffeeAction(id))
  }

  function setAmountCoffee(id: number, amount: number) {
    dispatch(setAmountCoffeeAction(id, amount))
  }

  return (
    <CartContext.Provider
      value={{
        coffees,
        addNewCoffee,
        removeCoffee,
        setAmountCoffee,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
