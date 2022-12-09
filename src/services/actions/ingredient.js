// объект текущего просматриваемого ингредиента,
export const ADD_INGREDIENT_INFO = 'ADD_INGREDIENT_INFO';
export const DELETE_INGREDIENT_INFO = 'DELETE_INGREDIENT_INFO';

export const addIngredientInfo = (payload) => ({ type: ADD_INGREDIENT_INFO, payload })
export const deleteIngredientInfo = () => ({ type: DELETE_INGREDIENT_INFO })
