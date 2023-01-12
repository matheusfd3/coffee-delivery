import { CoffeeCartItem } from './reducer'

export enum ActionTypes {
  ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  SET_AMOUNT_COFFEE = 'SET_AMOUNT_COFFEE',
}

interface newCoffeeActionProps {
  type: ActionTypes.ADD_NEW_COFFEE
  payload: { newCoffee: CoffeeCartItem }
}

interface removeCoffeeActionProps {
  type: ActionTypes.REMOVE_COFFEE
  payload: { coffeeId: number }
}

interface setAmountCoffeeActionProps {
  type: ActionTypes.SET_AMOUNT_COFFEE
  payload: { coffeeId: number; amount: number }
}

export type ActionProps =
  | newCoffeeActionProps
  | removeCoffeeActionProps
  | setAmountCoffeeActionProps

export function addNewCoffeeAction(
  newCoffee: CoffeeCartItem,
): newCoffeeActionProps {
  return {
    type: ActionTypes.ADD_NEW_COFFEE,
    payload: {
      newCoffee,
    },
  }
}

export function removeCoffeeAction(coffeeId: number): removeCoffeeActionProps {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      coffeeId,
    },
  }
}

export function setAmountCoffeeAction(
  coffeeId: number,
  amount: number,
): setAmountCoffeeActionProps {
  return {
    type: ActionTypes.SET_AMOUNT_COFFEE,
    payload: {
      coffeeId,
      amount,
    },
  }
}
