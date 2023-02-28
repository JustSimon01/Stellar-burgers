import React from 'react';
import PropTypes from 'prop-types';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './TotalPrice.module.css';
import { FC } from 'react';

const TotalPrice: FC<{ totalPrice: number }> = ({ totalPrice }) => {

  return (
    <div className={styles.total}>
      <p className='text text_type_digits-medium'>
        {totalPrice}
      </p>
      <CurrencyIcon type='primary' />
    </div>
  );
}

TotalPrice.propTypes = {
  totalPrice: PropTypes.number.isRequired
}

export default TotalPrice;
