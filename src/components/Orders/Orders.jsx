import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { WS_CONNECTION_CLOSED } from '../../services/actions/ws-actions';
import OrderCard from './OrderCard/OrderCard';
import styles from './Orders.module.css'

function Orders({ path, type, reverse }) {
  const dispatch = useDispatch();
  const wsData = useSelector((store) => store.wsOrders);
  const ordersData = useSelector((store) => store.wsOrders.orders);

  useEffect(() => {
    dispatch({ type: type });
    return () => dispatch({ type: WS_CONNECTION_CLOSED });
  }, [dispatch]);

  return (
    <ul className={`${styles.blockWithScroll} mt-10`}>
      {reverse
        ? ordersData?.map(item => <OrderCard data={item} path={path} key={crypto.randomUUID()} />).reverse()
        : ordersData?.map(item => <OrderCard data={item} path={path} key={crypto.randomUUID()} />)
      }
    </ul>

  );
}

export default Orders;
