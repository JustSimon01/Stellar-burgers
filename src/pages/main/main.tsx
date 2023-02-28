import React, { useEffect } from 'react';
import styles from './main.module.css';
import BurgerIngredients from '../../components/BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../../components/BurgerConstructor/BurgerConstructor';
import { useDispatch, useSelector } from 'react-redux';
import { getItemsData } from '../../services/actions/ingresients-data';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Navigate } from 'react-router-dom';
import { FC } from 'react';

const MainPage: FC = () => {
  const itemsLoaded = useSelector((store: any) => store.ingredients.itemsLoaded);
  const userData = useSelector((store: any) => store.userInfo); //подгрузка данных из стора

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
