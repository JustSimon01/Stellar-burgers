import React, { useRef } from 'react';
import styles from './FillingElement.module.css';
import { ingredientPropTypes } from '../../../utils/PropTypes';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag, useDrop } from 'react-dnd/dist/hooks';
import { useDispatch } from 'react-redux';
import { moveIngredientInConstructor, deleteIngredient } from '../../../services/reducers/ingredients-constructor';

const FillingElement = ({ data, index }) => {
  const dispatch = useDispatch();
  const id = data._id;

  console.log(index, id)

  const ref = useRef(null)
  const [{ handlerId }, drop] = useDrop({
    accept: "filling",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor) {
      if (!ref.current) {
        return
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
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
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

  const opacity = isDragging ? 0.3 : 1;

  drag(drop(ref));

  return (
    <li ref={ref} style={{ opacity }} data-handler-id={handlerId} className={`${styles.fillingElement}  mr-2`}>
      <DragIcon type="primary" />
      <ConstructorElement className={`${styles.constructorWidth}`}
        text={data.name}
        price={data.price}
        thumbnail={data.image_mobile}
        handleClose={() => dispatch(deleteIngredient(index))}
      />
    </li>
  )
}
FillingElement.propTypes = {
  data: ingredientPropTypes.isRequired,
}

export default FillingElement;