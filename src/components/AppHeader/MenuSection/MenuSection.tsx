import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MenuSection.module.css';
import PropTypes from 'prop-types';
import { FC } from 'react';

type TMenuSection = {
  text: string,
  children: JSX.Element,
  active: boolean,
  link: string
}

const MenuSection: FC<TMenuSection> = ({text, children, active, link}) => {

  return (
    <Link to={link} className={styles.section} >
      {children}
      <p className={`${styles.text} ${active === true ? styles.active : null} text text_type_main-default`}>{text}</p>
    </Link>
  )
}

export default MenuSection;
