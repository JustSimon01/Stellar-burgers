// список всех полученных ингредиентов,
import { TIngredient } from '../../types/types';
import { getAllIngredients } from '../../API/api'
import { AppDispatch, AppThunk } from '../../types';

export const GET_INGREDIENTS_REQUEST: 'GET_INGREDIENTS_REQUEST' = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS: 'GET_INGREDIENTS_SUCCESS' = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED: 'GET_INGREDIENTS_FAILED' = 'GET_INGREDIENTS_FAILED';

//типизация экшенов
export interface IGetIngredientsRequest {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}

export interface IGetIngredientsSuccess {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  payload: Array<TIngredient>
}

export interface IGetIngredientsFailed {
  readonly type: typeof GET_INGREDIENTS_FAILED;
}


// Объединение типов
export type TIngredientsDataActions = 
  | IGetIngredientsRequest
  | IGetIngredientsSuccess
  | IGetIngredientsFailed
  ;

// Генераторы экшенов

export const getIngredientsRequest = (): IGetIngredientsRequest => ({
  type: GET_INGREDIENTS_REQUEST,
});

export const getIngredientsSuccess = (payload: Array<TIngredient>): IGetIngredientsSuccess => ({
  type: GET_INGREDIENTS_SUCCESS,
  payload
});

export const getIngredientsFailed = (): IGetIngredientsFailed => ({
  type: GET_INGREDIENTS_FAILED,
});


//Типизация thunk-экшенов
export const getItemsData: AppThunk = () => (dispatch: AppDispatch) => {
    dispatch(getIngredientsRequest())
    getAllIngredients().then(res => {
      if (res && res.success) {
        dispatch(getIngredientsSuccess(res.data))
      }
    }).catch(e => {
      dispatch(getIngredientsFailed())
    })
} 
