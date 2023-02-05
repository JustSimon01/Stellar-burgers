import React from 'react';
import styles from './InfoTable.module.css';
import PropTypes from 'prop-types';

function InfoTable({ name, arr, done, statusString }) {

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

InfoTable.propTypes = {
  name: PropTypes.string,
  arr: PropTypes.array,
  done: PropTypes.bool,
  statusString: PropTypes.string,
}

export default InfoTable;

