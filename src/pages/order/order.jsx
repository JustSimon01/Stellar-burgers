import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './order.module.css'
import OrderIngredient from '../../components/Orders/OrderIngredient/OrderIngredient';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import TotalPrice from '../../components/TotalPrice/TotalPrice';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { WS_CONNECTION_CLOSED } from '../../services/actions/ws-actions';
import OrderInfo from '../../components/OrderInfo/OrderInfo';
import PropTypes from 'prop-types';

function Order({ type }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const allOrdersData = useSelector((store) => store.wsOrders.orders);

  useEffect(() => {
    if (allOrdersData === null) {
      dispatch({ type: type });
      console.log('dispatch')
      return () => dispatch({ type: WS_CONNECTION_CLOSED });
    }
  }, []);


  return (
    <>
      {allOrdersData
        ? <OrderInfo ></OrderInfo>
        : <p>Загрузка данных...</p>}
    </>
  );
}

Order.propTypes = {
  type: PropTypes.string
}

export default Order;
