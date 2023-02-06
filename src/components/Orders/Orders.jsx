import React from 'react';
import OrderCard from './OrderCard/OrderCard';
import styles from './Orders.module.css'

function Orders({ path, ordersData, reverse }) {
  return (
    <ul className={`${styles.blockWithScroll} mt-10`}>
      {reverse
        ? ordersData.orders?.map(item => <OrderCard data={item} path={path} key={crypto.randomUUID()} />).reverse()
        : ordersData.orders?.map(item => <OrderCard data={item} path={path} key={crypto.randomUUID()} />)
      }
    </ul>

  );
}

export default Orders;
