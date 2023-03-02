import { TOrder } from "../../types/types";

export const ADD_CURRENT_ORDER_INFO: 'ADD_CURRENT_ORDER_INFO' = 'ADD_CURRENT_ORDER_INFO';
export const DELETE_CURRENT_ORDER_INFO: 'DELETE_CURRENT_ORDER_INFO' = 'DELETE_CURRENT_ORDER_INFO';

//типизация экшенов
export interface IAddCurrentOrderInfo {
  readonly type: typeof ADD_CURRENT_ORDER_INFO;
  payload: TOrder
}

export interface IDeleteCurrentOrderInfo {
  readonly type: typeof DELETE_CURRENT_ORDER_INFO;
}

// Объединение типов
export type TCurrentOrderActions = 
  | IAddCurrentOrderInfo
  | IDeleteCurrentOrderInfo
  ;

// Генераторы экшенов
export const addCurrentOrderInfo = (payload: TOrder): IAddCurrentOrderInfo => ({
  type: ADD_CURRENT_ORDER_INFO,
  payload
})

export const deleteCurrentOrderInfo = (): IDeleteCurrentOrderInfo => ({
  type: DELETE_CURRENT_ORDER_INFO
})
