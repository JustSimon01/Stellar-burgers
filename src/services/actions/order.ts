import { postOrderInfo } from "../../API/api";
import { AppDispatch, AppThunk } from '../../types';
//объект текущего заказа
export const GET_ORDER_NUMBER_REQUEST: 'GET_ORDER_NUMBER_REQUEST' = 'GET_ORDER_NUMBER_REQUEST';
export const GET_ORDER_NUMBER_SUCCESS: 'GET_ORDER_NUMBER_SUCCESS' = 'GET_ORDER_NUMBER_SUCCESS';
export const GET_ORDER_NUMBER_FAILED: 'GET_ORDER_NUMBER_FAILED' = 'GET_ORDER_NUMBER_FAILED';

export const ADD_ORDER_ITEMS: 'ADD_ORDER_ITEMS' = 'ADD_ORDER_ITEMS';
export const DELETE_ORDER_INFO: 'DELETE_ORDER_INFO' = 'DELETE_ORDER_INFO';

// Типизация экшенов
export interface IGetOrderNumberRequest {
  readonly type: typeof GET_ORDER_NUMBER_REQUEST;
}

export interface IGetOrderNumberSuccess {
  readonly type: typeof GET_ORDER_NUMBER_SUCCESS;
  readonly payload: number,
}

export interface IGetOrderNumberFailed {
  readonly type: typeof GET_ORDER_NUMBER_FAILED;
}

export interface IAddOrderItems {
    readonly type: typeof ADD_ORDER_ITEMS;
    readonly payload: string[],
}

export interface IDeleteOrderInfo {
  readonly type: typeof DELETE_ORDER_INFO;
}

// Объединение типов
export type TOrderActions = 
  | IGetOrderNumberRequest
  | IGetOrderNumberSuccess
  | IGetOrderNumberFailed
  | IAddOrderItems
  | IDeleteOrderInfo
  ;

// Генераторы экшенов
export const getOrderNumberRequest = (): IGetOrderNumberRequest => ({
  type: GET_ORDER_NUMBER_REQUEST
});

export const getOrderNumberSuccess = (payload: number): IGetOrderNumberSuccess => ({
  type: GET_ORDER_NUMBER_SUCCESS,
  payload
});

export const getOrderNumberFailed = (): IGetOrderNumberFailed => ({
  type: GET_ORDER_NUMBER_FAILED
});

export const deleteOrderInfo = (): IDeleteOrderInfo => ({
  type: DELETE_ORDER_INFO 
});

export const addOrderitems = (payload: string[]): IAddOrderItems => ({
  type: ADD_ORDER_ITEMS,
  payload
});

//Типизация thunk-экшенов
export const sentOrderInformation: AppThunk = (array: Array<string>) => {
  return function (dispatch: AppDispatch) {
    dispatch(getOrderNumberRequest())
    postOrderInfo(array).then(res => {
      if (res && res.success) {
        dispatch(getOrderNumberSuccess(res.order.number))
      }
    }).catch(e => {
      dispatch(getOrderNumberFailed())
    })
  }
}

