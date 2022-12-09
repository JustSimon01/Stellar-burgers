// список всех ингредиентов в текущем конструкторе бургера,
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const INGREDIENT_MOVE = 'INGREDIENT_MOVE';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const ADD_BUNS = 'ADD_BUNS';
export const DELETE_ALL_INGREDIENTS = 'DELETE_ALL_INGREDIENTS';

export const addIngredientInConstructor = (payload) => ({ type: ADD_INGREDIENT, payload });
export const moveIngredientInConstructor = (payload) => ({ type: INGREDIENT_MOVE, payload });
export const deleteIngredient = (payload) => ({ type: DELETE_INGREDIENT, payload });
export const deleteAllIngredients = () => ({ type: DELETE_ALL_INGREDIENTS });
export const addBunsInConstructor = (payload) => ({ type: ADD_BUNS, payload });
