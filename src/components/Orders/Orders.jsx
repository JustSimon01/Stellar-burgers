import React from 'react';
import OrderCard from './OrderCard/OrderCard';
import styles from './Orders.module.css'

function Orders({ data, path }) {

  return (
    <ul className={`${styles.blockWithScroll} mt-10`}>
      {data.map(item => <OrderCard data={item} path={path} key={item.number} />)}
    </ul>

  );
}

export default Orders;
