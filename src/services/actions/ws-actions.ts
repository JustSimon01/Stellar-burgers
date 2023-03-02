import { TOrder } from "../../types/types";

export const WS_CONNECTION_START: 'WS_CONNECTION_START' = 'WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED';

export const WS_GET_ORDERS: 'WS_GET_ORDERS' = 'WS_GET_ORDERS';

// export type TWsActionsTypes = {
//   WS_CONNECTION_START: string,
//   WS_CONNECTION_SUCCESS: string,
//   WS_CONNECTION_ERROR: string,
//   WS_CONNECTION_CLOSED: string,
//   WS_GET_ORDERS: string,
// }

//типизация экшенов
export interface IWsConnectionStart {
  readonly type: typeof WS_CONNECTION_START;
}
export interface IWsConnectionSuccess {
  readonly type: typeof WS_CONNECTION_SUCCESS;
}
export interface IWsConnectionError {
  readonly type: typeof WS_CONNECTION_ERROR;
  payload: string
}
export interface IWsConnectionClosed {
  readonly type: typeof WS_CONNECTION_CLOSED;
}
export interface IWsGetOrders {
  readonly type: typeof WS_GET_ORDERS;
  payload:{orders: Array<TOrder>, total: number, totalToday: number}
}


// Объединение типов
export type TWsActions = 
  | IWsConnectionStart
  | IWsConnectionSuccess
  | IWsConnectionError
  | IWsConnectionClosed
  | IWsGetOrders
  ;
