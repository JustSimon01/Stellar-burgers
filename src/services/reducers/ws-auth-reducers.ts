import {
  WS_AUTH_CONNECTION_SUCCESS,
  WS_AUTH_CONNECTION_ERROR,
  WS_AUTH_CONNECTION_CLOSED,
  WS_GET_AUTH_ORDERS
} from '../actions/ws-auth-actions';
import { TWsAuthActions } from '../actions/ws-auth-actions';
import { TOrder } from '../../types/types';

type TinitialState = {
  wsAuthConnected: boolean,
  wsAuthError: string | undefined,
  orders: Array<TOrder> | null,
  total: number,
  totalToday: number
}

const initialState: TinitialState = {
  wsAuthConnected: false,
  wsAuthError: undefined,
  orders: null,
  total: 0,
  totalToday: 0
}

// Создадим редьюсер для WebSocket
export const wsAuthReducer = (state = initialState, action: TWsAuthActions) => {
  switch (action.type) {
    // Опишем обработку экшена с типом WS_CONNECTION_SUCCESS
    // Установим флаг wsConnected в состояние true
    case WS_AUTH_CONNECTION_SUCCESS:
      return {
        ...state,
        wsAuthError: undefined,
        wsAuthConnected: true
      };

    // Опишем обработку экшена с типом WS_CONNECTION_ERROR
    // Установим флаг wsConnected в состояние false и передадим ошибку из action.payload
    case WS_AUTH_CONNECTION_ERROR:
      return {
        ...state,
        wsAuthError: action.payload,
        wsAuthConnected: false
      };

    // Опишем обработку экшена с типом WS_CONNECTION_CLOSED, когда соединение закрывается
    // Установим флаг wsConnected в состояние false
    case WS_AUTH_CONNECTION_CLOSED:
      return {
        ...state,
        wsAuthError: undefined,
        wsAuthConnected: false,
        orders: null,
      };

    // Опишем обработку экшена с типом WS_GET_AUTH_ORDERS
    // Обработка происходит, когда с сервера возвращаются данные
    case WS_GET_AUTH_ORDERS:
      return {
        ...state,
        wsAuthError: undefined,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday
      };
    default:
      return state;
  }
};

