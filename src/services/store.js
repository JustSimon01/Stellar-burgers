//import { composeWithDevTools } from 'redux-devtools-extension';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/rootReducer';
import { socketMiddleware } from './middleware/socketMiddleware';

//подключаем DevTools
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const wsUrl = 'wss://norma.nomoreparties.space/orders'
//создаем стор где будет все храниться
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, socketMiddleware(wsUrl))));
