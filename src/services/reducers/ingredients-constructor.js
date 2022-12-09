import { ADD_INGREDIENT, INGREDIENT_MOVE, DELETE_INGREDIENT, ADD_BUNS } from '../actions/ingredients-constructor';
import update from 'immutability-helper';

// список всех ингредиентов в текущем конструкторе бургера,
const initialState = {
  ingredients: [],
  buns: []
}

export const ingredientsConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUNS:
      return { ...state, buns: action.payload }
    case ADD_INGREDIENT:
      return { ...state, ingredients: [...state.ingredients, ...action.payload] }
    case DELETE_INGREDIENT:
      return { ...state, ingredients: [...state.ingredients.filter((item, index) => index !== action.payload)] }
    case INGREDIENT_MOVE:
      return {
        ...state,
        ingredients: update(state.ingredients, {
          $splice: [
            [action.payload.dragIndex, 1],
            [action.payload.hoverIndex, 0, state.ingredients[action.payload.dragIndex]],
          ],
        }),
      }
    default:
      return state;
  }
};

export const addIngredientInConstructor = (payload) => ({ type: ADD_INGREDIENT, payload });
export const moveIngredientInConstructor = (payload) => ({ type: INGREDIENT_MOVE, payload });
export const deleteIngredient = (payload) => ({ type: DELETE_INGREDIENT, payload });
export const addBunsInConstructor = (payload) => ({ type: ADD_BUNS, payload });