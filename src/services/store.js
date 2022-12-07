
//import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { rootReducer } from './reducers/rootReducer';

//создаем стор где будет все храниться
export const store = createStore(rootReducer,);
