import { postOrderInfo } from "../../API/api";
//объект текущего заказа
export const GET_ORDER_NUMBER_REQUEST = 'GET_ORDER_NUMBER_REQUEST';
export const GET_ORDER_NUMBER_SUCCESS = 'GET_ORDER_NUMBER_SUCCESS';
export const GET_ORDER_NUMBER_FAILED = 'GET_ORDER_NUMBER_FAILED';

export const ADD_ORDER_ITEMS = 'ADD_ORDER_ITEMS';
export const DELETE_ORDER_INFO = 'DELETE_ORDER_INFO';

export function sentOrderInformation(array) {
  // Воспользуемся первым аргументом из усилителя redux-thunk — dispatch
  return function (dispatch) {
    dispatch({
      type: GET_ORDER_NUMBER_REQUEST
    })

    postOrderInfo(array).then(res => {
      console.log(res.order.number)
      if (res && res.success) {
        dispatch({
          type: GET_ORDER_NUMBER_SUCCESS,
          payload: res.order.number
        })
      } else {
        dispatch({
          type: GET_ORDER_NUMBER_FAILED
        })
      }
    })
  }
} 