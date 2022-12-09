import { ADD_INGREDIENT_INFO, DELETE_INGREDIENT_INFO } from '../actions/ingredient'

// объект текущего просматриваемого ингредиента,
const initialState = {
  information: null
}

export const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT_INFO: {
      return { information: action.payload };
    }
    case DELETE_INGREDIENT_INFO: {
      return { information: null };
    }
    default: {
      return state;
    }
  }
};
