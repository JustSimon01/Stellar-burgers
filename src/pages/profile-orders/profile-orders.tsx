import React, { useEffect } from 'react';
import styles from './profile-orders.module.css'
import { WS_AUTH_CONNECTION_START, WS_AUTH_CONNECTION_CLOSED } from '../../services/actions/ws-auth-actions';
import { useDispatch, useSelector } from 'react-redux';
import Orders from '../../components/Orders/Orders';
import { FC } from 'react';

const ProfileOrders: FC<{path: string, reverse?: boolean }> = ({ path, reverse }) => {
  const dispatch = useDispatch();
  const wsAuthData = useSelector((store: any) => store.wsAuthOrders.orders);

  useEffect(() => {
    dispatch({ type: WS_AUTH_CONNECTION_START });
    return () => dispatch({ type: WS_AUTH_CONNECTION_CLOSED });
  }, [dispatch]);

  return (
    <>
    {!wsAuthData
      ? <p>...Загрузка</p>
      : <Orders ordersData={wsAuthData} path={path} reverse={reverse} />}
    </>
  );
}

export default ProfileOrders;
