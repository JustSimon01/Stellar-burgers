import React from 'react';
import styles from './MenuSection.module.css';
import PropTypes from 'prop-types';


function MenuSection({ text, children, active }) {

  return (
    <a href='#' className={styles.section}>
      {children}
      <p className={`${styles.text} ${active === true ? styles.active : null} text text_type_main-default`}>{text}</p>
    </a>
  )
}

MenuSection.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
  active: PropTypes.bool
}

export default MenuSection;
