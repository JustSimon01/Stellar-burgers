import React from 'react';
import OrderCard from './OrderCard/OrderCard';
import styles from './Orders.module.css'

function Orders() {
  return (
    <ul className={`${styles.blockWithScroll} mt-10`}>
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />

      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
    </ul>

  );
}

export default Orders;
