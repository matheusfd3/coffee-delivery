import produce from 'immer'
import { ActionProps, ActionTypes } from './actions'

export interface CoffeeCartItem {
  id: number
  imageName: string
  title: string
  price: number
  amount: number
}

interface CartState {
  coffees: CoffeeCartItem[]
}

export function CartReducer(state: CartState, action: ActionProps): CartState {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFEE: {
      const coffeeIndex = state.coffees.findIndex((coffee) => {
        return coffee.id === action.payload.newCoffee.id
      })

      if (coffeeIndex < 0) {
        return produce(state, (draft) => {
          draft.coffees.push(action.payload.newCoffee)
        })
      }

      return produce(state, (draft) => {
        draft.coffees[coffeeIndex].amount =
          draft.coffees[coffeeIndex].amount + action.payload.newCoffee.amount
      })
    }
    case ActionTypes.REMOVE_COFFEE: {
      const newCoffees = state.coffees.filter(
        (coffee) => coffee.id !== action.payload.coffeeId,
      )

      return {
        coffees: newCoffees,
      }
    }
    case ActionTypes.SET_AMOUNT_COFFEE: {
      const coffeeIndex = state.coffees.findIndex((coffee) => {
        return coffee.id === action.payload.coffeeId
      })

      return produce(state, (draft) => {
        draft.coffees[coffeeIndex].amount = action.payload.amount
      })
    }
    default:
      return state
  }
}
