import { ADD_INGREDIENT_INFO, DELETE_INGREDIENT_INFO } from '../actions/ingredient'
import { TIngredientInfoActions } from '../actions/ingredient';
import { TIngredient } from '../../types/types';

// объект текущего просматриваемого ингредиента,
type TInitialState = {
  information: TIngredient | null
}

const initialState: TInitialState = {
  information: null
}

export const ingredientReducer = (state = initialState, action: TIngredientInfoActions) => {
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
