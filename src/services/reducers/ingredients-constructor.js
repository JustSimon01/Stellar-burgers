import { INGREDIENTS_CONSTRUCTOR, ADD_INGREDIENT } from '../actions/ingredients-constructor'

// список всех ингредиентов в текущем конструкторе бургера,
const initialState = {
  ingredients: []
}

export const ingredientsConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case INGREDIENTS_CONSTRUCTOR:
      return { ...state, ingredients: [...state.ingredients, action.payload] }//подгружается только то что есть в массиве ингредиентов
    case ADD_INGREDIENT:
      return { ...state, ingredients: [...state.ingredients, ...action.payload] }//подгружается только то что есть в массиве ингредиентов
    default:
      return state;
  }
};
//функция добавления ингридиента в массив бургер-конструктора
export const setIngredientsConstructor = (payload) => ({ type: INGREDIENTS_CONSTRUCTOR, payload })
export const addIngredientInConstructor = (payload) => ({ type: ADD_INGREDIENT, payload })