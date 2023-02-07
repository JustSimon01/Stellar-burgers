import React from 'react';
import OrderCard from './OrderCard/OrderCard';
import styles from './Orders.module.css'

function Orders({ path, ordersData, reverse }) {
  return (
    <ul className={`${styles.blockWithScroll} mt-10`}>
      {reverse
        ? ordersData.orders?.map(item => <OrderCard data={item} path={path} key={item._id} />).reverse()
        : ordersData.orders?.map(item => <OrderCard data={item} path={path} key={item._id} />)
      }
    </ul>
  );
}

export default Orders;
