import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import OrderInfo from '../../components/OrderInfo/OrderInfo';
import PropTypes from 'prop-types';

function Order({ start, close, data }) {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data === null) {
      dispatch({ type: start });
      return () => dispatch({ type: close });
    }
  }, []);

  return (
    <>
      {data
        ? <OrderInfo data={data} ></OrderInfo>
        : <p>Загрузка данных...</p>}
    </>
  );
}

Order.propTypes = {
  type: PropTypes.string
}

export default Order;
