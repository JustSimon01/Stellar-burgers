import React from 'react';
import styles from './feed.module.css'
import Orders from '../../components/Orders/Orders';
import OrderCard from '../../components/Orders/OrderCard/OrderCard';

function Feed() {
  return (
    <div className={`${styles.page}`}>
      <h2 className={`${styles.block} text text_type_main-large mt-10 mb-5`}>Лента заказов</h2>
      <div className={`${styles.block}`}>
        <Orders />
        <div className={`${styles.ordersTemplate}`}>
          <div className={`${styles.ordersStatus}`}>
            <div className={`${styles.table}`}>
              <h3 className={`${styles.tableHeader} text text_type_main-medium mb-6`}>Готовы</h3>
              <ul className={`${styles.tableList}`}>
                <li className={`${styles.listElement} ${styles.done} text text_type_digits-default`}>234234</li>
                <li className={`${styles.listElement} ${styles.done} text text_type_digits-default`}>523511</li>
                <li className={`${styles.listElement} ${styles.done} text text_type_digits-default`}>234234</li>
                <li className={`${styles.listElement} ${styles.done} text text_type_digits-default`}>412314</li>
                <li className={`${styles.listElement} ${styles.done} text text_type_digits-default`}>534534</li>
              </ul>
            </div>

            <div className={`${styles.table}`}>
              <h3 className={`${styles.tableHeader} text text_type_main-medium mb-6`}>В работе</h3>
              <ul className={`${styles.tableList}`}>
                <li className={`${styles.listElement} text text_type_digits-default`}>868673</li>
                <li className={`${styles.listElement} text text_type_digits-default`}>878674</li>
                <li className={`${styles.listElement} text text_type_digits-default`}>678675</li>
                <li className={`${styles.listElement} text text_type_digits-default`}>478676</li>
                <li className={`${styles.listElement} text text_type_digits-default`}>678677</li>
              </ul>
            </div>
          </div>
          <h3 className={`${styles.statsHeader} text text_type_main-medium mt-15`}>Выполненно за все время:</h3>
          <p className={`${styles.statsData} text text_type_digits-large`}>34252</p>
          <h3 className={`${styles.statsHeader} text text_type_main-medium mt-15`}>Выполненно за сегодня:</h3>
          <p className={`${styles.statsData} text text_type_digits-large`}>4234</p>
        </div>
      </div>
    </div>
  );
}

export default Feed;
