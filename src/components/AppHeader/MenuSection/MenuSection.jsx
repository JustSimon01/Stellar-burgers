import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MenuSection.module.css';
import PropTypes from 'prop-types';


function MenuSection({ text, children, active, link }) {

  return (
    <Link to={link} className={styles.section}>
      {children}
      <p className={`${styles.text} ${active === true ? styles.active : null} text text_type_main-default`}>{text}</p>
    </Link>
  )
}

MenuSection.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
  active: PropTypes.bool
}

export default MenuSection;
