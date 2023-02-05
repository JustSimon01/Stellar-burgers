import React, { useEffect } from 'react';
import styles from './feed.module.css'
import { WS_CONNECTION_START, WS_CONNECTION_CLOSED } from '../../services/actions/ws-actions';
import { useDispatch, useSelector } from 'react-redux';
import Orders from '../../components/Orders/Orders';
import InfoTable from '../../components/InfoTable/InfoTable';
import PropTypes from 'prop-types';

function Feed({ path }) {

  const wsData = useSelector((store) => store.wsOrders);
  const ordersData = useSelector((store) => store.wsOrders.orders);

  return (
    <div className={`${styles.page}`}>
      <h2 className={`${styles.block} text text_type_main-large mt-10 mb-5`}>Лента заказов</h2>
      <div className={`${styles.block}`}>
        <Orders type={WS_CONNECTION_START} path={path} />
        <div className={`${styles.ordersTemplate}`}>
          <div className={`${styles.ordersStatus}`}>
            {ordersData
              ? <>
                <InfoTable done name={"Готов"} arr={ordersData} statusString={"done"} />
                <InfoTable name={"В работе"} arr={ordersData} statusString={"pending"} />
              </>
              : null}
          </div>
          <h3 className={`${styles.statsHeader} text text_type_main-medium mt-15`}>Выполненно за все время:</h3>
          <p className={`${styles.statsData} text text_type_digits-large`}>{wsData.total}</p>
          <h3 className={`${styles.statsHeader} text text_type_main-medium mt-15`}>Выполненно за сегодня:</h3>
          <p className={`${styles.statsData} text text_type_digits-large`}>{wsData.totalToday}</p>
        </div>
      </div>
    </div>
  );
}

Feed.propTypes = {
  path: PropTypes.string,
}

export default Feed;
