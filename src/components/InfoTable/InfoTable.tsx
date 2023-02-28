import React from 'react';
import styles from './InfoTable.module.css';
import { FC } from 'react';
import { TOrder } from '../../types/types';

type TInfoTable = {
  name: string,
  arr: Array<TOrder>,
  done?: boolean,
  statusString: "done" | "pending"
 }

const InfoTable: FC<TInfoTable> = ({ name, arr, done, statusString }) => {
  const ordersReady = arr.filter(item => item.status === statusString)

  return (
    <div className={`${styles.table}`}>
      <h3 className={`${styles.tableHeader} text text_type_main-medium mb-6`}>{name}:</h3>
      <ul className={`${styles.tableList}`}>
        {ordersReady.slice(0, 10).map(item =>
          done
            ? <li className={`${styles.listElement} ${styles.done} text text_type_digits-default`} key={item.number}>{item.number}</li>
            : <li className={`${styles.listElement} text text_type_digits-default`} key={item.number}>{item.number}</li>
        )}
      </ul>
    </div>

  );
}

export default InfoTable;

