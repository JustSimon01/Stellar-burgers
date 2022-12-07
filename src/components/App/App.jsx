import React, { useState } from 'react';
import './App.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import { DataContext } from '../../services/contextData';
import { getAllIngredients } from '../../API/api';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch();
  const cash = useSelector(state => state.reducerR.cash)
  console.log(cash)

  const [state, setState] = useState({
    isLoading: false,
    hasError: false,
    data: []
  });

  useState(() => {
    const getData = () => {
      setState({ ...state, hasError: false, isLoading: true });
      getAllIngredients()
        .then(({ data }) => setState({ ...state, data, isLoading: false }))
        .catch(e => {
          setState({ ...state, hasError: true, isLoading: false });
        });
    };

    getData();

  }, []);


  return (
    <div className="App">
      <AppHeader />
      {state.isLoading === true
        ? <div>Загрузка...</div>
        : <main className='App-main'>
          <DataContext.Provider value={state.data}>
            <BurgerIngredients data={state.data} />
            <BurgerConstructor />
          </DataContext.Provider>
        </main>
      }
    </div>
  );
}

export default App;
