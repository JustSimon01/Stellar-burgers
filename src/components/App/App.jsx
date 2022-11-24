import React, {useState, useReducer} from 'react';
import './App.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import { DataContext, TotalPriceContext, OrderNumberContext } from '../../contextData/contextData';
import {getAllIngredients} from '../../API/api';
import {reducer, totalPriceInitialState} from '../../reducer/reducer';

function App() {
  const [totalPrice, totalPriceDispatch] = useReducer(reducer, totalPriceInitialState)
  const [order, setOrder] = useState({
    number:'0',
    array: [],
  });
  const [state, setState] = useState({
    isLoading: false,
    hasError: false,
    data: []
  });

  useState(() =>{
    const getData = () => {
      setState({ ...state, hasError: false, isLoading: true });
      getAllIngredients()
        .then(({data}) => setState({ ...state, data, isLoading: false }))
        .catch(e => {
          setState({ ...state, hasError: true, isLoading: false });
        });
    };
     
     getData();
     
   }, []);

  return (
    <div className="App">
      <AppHeader />
      <main className='App-main'>
        <DataContext.Provider value={state.data}>
          <BurgerIngredients data={state.data}/>
            <TotalPriceContext.Provider value={{totalPrice, totalPriceDispatch}}>
              <OrderNumberContext.Provider value={{order, setOrder}}>
                <BurgerConstructor />
              </OrderNumberContext.Provider>      
            </TotalPriceContext.Provider>
        </DataContext.Provider>
      </main>
    </div>
  );
}

export default App;
