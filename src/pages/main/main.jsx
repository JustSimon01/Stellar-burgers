import React, { useEffect } from 'react';
import styles from './main.module.css';
import BurgerIngredients from '../../components/BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../../components/BurgerConstructor/BurgerConstructor';
import { useDispatch, useSelector } from 'react-redux';
import { getItemsData } from '../../services/actions/ingresients-data';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Navigate } from 'react-router-dom';

function MainPage() {
  const itemsLoaded = useSelector((store) => store.ingredients.itemsLoaded);
  const userData = useSelector((store) => store.userInfo); //подгрузка данных из стора
  // const dispatch = useDispatch();

  //useEffect(() => { dispatch(getItemsData()) }, [dispatch])

  return (
    <>
      {itemsLoaded === false
        ? <div>Загрузка...</div>
        : <main className={styles.AppMain}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        </main>
      }
    </>
  );
}

export default MainPage;
