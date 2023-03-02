//import { composeWithDevTools } from 'redux-devtools-extension';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/rootReducer';
import { socketMiddleware } from './middleware/socketMiddleware';
import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_ORDERS
} from "./actions/ws-actions";
import {
  WS_AUTH_CONNECTION_START,
  WS_AUTH_CONNECTION_SUCCESS,
  WS_AUTH_CONNECTION_ERROR,
  WS_AUTH_CONNECTION_CLOSED,
  WS_GET_AUTH_ORDERS
} from "./actions/ws-auth-actions";

const wsUrl = 'wss://norma.nomoreparties.space'
const wsActions = {
  wsStart: WS_CONNECTION_START,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  getOrders: WS_GET_ORDERS
};
const wsAuthActions = {
  wsStart: WS_AUTH_CONNECTION_START,
  onOpen: WS_AUTH_CONNECTION_SUCCESS,
  onClose: WS_AUTH_CONNECTION_CLOSED,
  onError: WS_AUTH_CONNECTION_ERROR,
  getOrders: WS_GET_AUTH_ORDERS
};


//подключаем DevTools
declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//создаем стор где будет все храниться
const enhancers = composeEnhancers(applyMiddleware(thunk, socketMiddleware(`${wsUrl}/orders`, wsAuthActions, true), socketMiddleware(`${wsUrl}/orders/all`, wsActions, false),));
export const store = createStore(rootReducer, enhancers);
