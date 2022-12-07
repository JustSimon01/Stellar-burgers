import { INGREDIENTS_IN_CONSTRUCTOR } from '../actions/actions'

// список всех ингредиентов в текущем конструкторе бургера,



const initialState = {
  cash: 0,
}

export const reducerR = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CASH":
      return { ...state, cash: state.cash + action.payload }
    case "GET_CASH":
      return { ...state, cash: state.cash - action.payload }
    default:
      return state
  }
}