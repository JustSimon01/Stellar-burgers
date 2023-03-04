import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients-data'
import { ingredientReducer } from './ingredient';
import { ingredientsConstructorReducer } from './ingredients-constructor';
import { orderReducer } from './order';
import { userInfoReducer } from './login';
import { resetPasswordReducer } from './reset-password';
import { wsReducer } from './ws-reducers';
import { wsAuthReducer } from './ws-auth-reducers';
import { currentOrderReducer } from './current-order';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  constructorIngredients: ingredientsConstructorReducer,
  ingredientInformation: ingredientReducer,
  orderInformation: orderReducer,
  userInfo: userInfoReducer,
  resetPassword: resetPasswordReducer,
  wsOrders: wsReducer,
  wsAuthOrders: wsAuthReducer,
  currentOrder: currentOrderReducer
});
