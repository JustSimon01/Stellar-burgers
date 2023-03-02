import React, { useRef } from 'react';
import styles from './FillingElement.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag, useDrop } from 'react-dnd/dist/hooks';
import { useDispatch } from '../../../types/hooks';
import { moveIngredientInConstructor, deleteIngredient } from '../../../services/actions/ingredients-constructor';
import { FC } from 'react';
import { TIngredient } from '../../../types/types';

type TFillingElement = {
  data: TIngredient,
  index: number,
  id: string
}

const FillingElement: FC<TFillingElement> = ({ data, index, id }) => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLLIElement>(null)

  const [, drop] = useDrop({
    accept: "filling",
    collect() { },
    hover(item: any, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset()
      const hoverClientY = clientOffset!.y - hoverBoundingRect.top
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
 
      dispatch(moveIngredientInConstructor({ dragIndex, hoverIndex }))

      item.index = hoverIndex;
    },
  })

  const [{ isDragging }, drag] = useDrag({
    type: "filling",
    item: () => {
      return { id, index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const opacity = isDragging ? 0 : 1;

  drag(drop(ref));

  return (
    <li ref={ref} draggable={true} style={{ opacity }} className={`${styles.fillingElement}  mr-2`}>
      <DragIcon type="primary" />
      <ConstructorElement extraClass={`${styles.constructorWidth}`}
        text={data.name}
        price={data.price}
        thumbnail={data.image_mobile}
        handleClose={() => dispatch(deleteIngredient(id))}
      />
    </li>
  )
}

export default FillingElement;
