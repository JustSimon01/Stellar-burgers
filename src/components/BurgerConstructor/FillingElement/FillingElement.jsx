import React, { useRef } from 'react';
import styles from './FillingElement.module.css';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../../utils/PropTypes';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag, useDrop } from 'react-dnd/dist/hooks';
import { useDispatch } from 'react-redux';
import { moveIngredientInConstructor, deleteIngredient } from '../../../services/actions/ingredients-constructor';

const FillingElement = ({ data, index, id }) => {
  const dispatch = useDispatch();
  const ref = useRef(null)

  const [, drop] = useDrop({
    accept: "filling",
    collect() { },
    hover(item, monitor) {
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

  const opacity = isDragging ? 0 : 1;

  drag(drop(ref));

  return (
    <li ref={ref} draggable={true} style={{ opacity }} className={`${styles.fillingElement}  mr-2`}>
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
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired
}

export default FillingElement;
