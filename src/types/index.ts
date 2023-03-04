import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator } from "redux";
import { store } from "../services/store";
import { TCurrentOrderActions } from "../services/actions/current-order";
import { TIngredientInfoActions } from "../services/actions/ingredient";
import { TIngrediensConstructorActions } from "../services/actions/ingredients-constructor";
import { TIngredientsDataActions } from "../services/actions/ingresients-data";
import { TLoginActions } from "../services/actions/login";
import { TOrderActions } from "../services/actions/order";
import { TResetPasswordActions } from "../services/actions/reset-password";
import { TWsActions } from "../services/actions/ws-actions";
import { TWsAuthActions } from "../services/actions/ws-auth-actions";
import { rootReducer } from "../services/reducers/rootReducer";


//типизация стора
export type RootState = ReturnType<typeof rootReducer>;

// Все экшены приложения
type TApplicationActions =
  | TCurrentOrderActions
  | TIngredientInfoActions
  | TIngrediensConstructorActions
  | TIngredientsDataActions
  | TLoginActions
  | TOrderActions
  | TResetPasswordActions
  | TWsActions
  | TWsAuthActions
  ;

// Типизация Redux Thunk
export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

// Типизация метода dispatch для проверки на валидность отправляемого экшена
export type AppDispatch = typeof store.dispatch; 
