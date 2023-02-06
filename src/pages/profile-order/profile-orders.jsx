import React, { useEffect } from 'react';
import styles from './profile-orders.module.css'
import { WS_AUTH_CONNECTION_START, WS_AUTH_CONNECTION_CLOSED } from '../../services/actions/ws-auth-actions';
import { useDispatch, useSelector } from 'react-redux';
import Orders from '../../components/Orders/Orders';
import PropTypes from 'prop-types';

function ProfileOrders({ path }) {
  const dispatch = useDispatch();
  const wsAuthData = useSelector((store) => store.wsAuthOrders);

  useEffect(() => {
    dispatch({ type: WS_AUTH_CONNECTION_START });
    return () => dispatch({ type: WS_AUTH_CONNECTION_CLOSED });
  }, [dispatch]);

  return (
    <Orders ordersData={wsAuthData} path={path} />
  );
}

ProfileOrders.propTypes = {
  path: PropTypes.string,
}

export default ProfileOrders;
