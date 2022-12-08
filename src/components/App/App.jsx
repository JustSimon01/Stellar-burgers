import React, { useState, useEffect } from 'react';
import './App.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import { useDispatch, useSelector } from 'react-redux';
import { getItemsData } from '../../services/actions/ingresients-data';


function App() {
  //добавить рендер при ошибке?
  const itemsLoaded = useSelector((store) => store.ingredients.itemsLoaded);
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getItemsData()) }, [dispatch])

  return (
    <div className="App">
      <AppHeader />
      {itemsLoaded === false
        ? <div>Загрузка...</div>
        : <main className='App-main'>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
      }
    </div>
  );
}

export default App;
