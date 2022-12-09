import React, { useEffect } from 'react';
import './App.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import { useDispatch, useSelector } from 'react-redux';
import { getItemsData } from '../../services/actions/ingresients-data';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


function App() {
  const itemsLoaded = useSelector((store) => store.ingredients.itemsLoaded);
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getItemsData()) }, [dispatch])

  return (
    <div className="App">
      <AppHeader />
      {itemsLoaded === false
        ? <div>Загрузка...</div>
        : <main className='App-main'>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        </main>
      }
    </div>
  );
}

export default App;
