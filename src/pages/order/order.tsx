import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import OrderInfo from '../../components/OrderInfo/OrderInfo';
import { FC } from 'react';
import { TOrder } from '../../types/types';

type TOrderFullScreen = {
  start: string,
  close: string,
  data: Array<TOrder>
}

const OrderFullScreen: FC <TOrderFullScreen> = ({ start, close, data }) => {
  const { id } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  console.log(data)

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

export default OrderFullScreen;
