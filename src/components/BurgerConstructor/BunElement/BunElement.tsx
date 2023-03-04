import React from 'react';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from '../../../types/hooks';
import emptyBurger from '../../../images/empty-burger.png';
import { FC } from 'react';

type TBunElement = {
  type: "top" | "bottom" | undefined,
  isLocked: boolean
}

const BunElement: FC<TBunElement> = ({ type, isLocked }) => {

  const buns = useSelector((store) => store.constructorIngredients.buns);

  return (
    <>{buns.length === 0
      ? <ConstructorElement
        type={type}
        isLocked={isLocked}
        text={'Добавь булку!'}
        price={0}
        thumbnail={emptyBurger}
      />
      : <ConstructorElement
        type={type}
        isLocked={isLocked}
        text={`${buns[0].name} ${type === 'top' ? '(верх)' : '(низ)'}`}
        price={buns[0].price}
        thumbnail={buns[0].image_mobile}
      />
    }
    </>
  )
}

export default BunElement;
