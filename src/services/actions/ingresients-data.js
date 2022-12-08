// список всех полученных ингредиентов,

import { getAllIngredients } from '../../API/api'

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export function getItemsData() {
  // Воспользуемся первым аргументом из усилителя redux-thunk — dispatch
  return function (dispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST
    })

    getAllIngredients().then(res => {
      if (res && res.success) {
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          items: res.data
        })
      } else {
        dispatch({
          type: GET_INGREDIENTS_FAILED
        })
      }
    })
  }
} 