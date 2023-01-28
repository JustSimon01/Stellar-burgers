import { combineReducers } from 'redux';
import { ingredientsReducer } from '../reducers/ingredients-data'
import { ingredientReducer } from './ingredient';
import { ingredientsConstructorReducer } from './ingredients-constructor';
import { orderReducer } from './order';
import { userInfoReducer } from './login';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  constructorIngredients: ingredientsConstructorReducer,
  ingredientInformation: ingredientReducer,
  orderInformation: orderReducer,
  userInfo: userInfoReducer
});
