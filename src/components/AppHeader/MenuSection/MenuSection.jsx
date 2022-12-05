import styles from './MenuSection.module.css';


function MenuSection({ text, children, active }) {

  return (

    <a href='#' className={styles.section}>
      {children}
      <p className={`${styles.text} ${active === true ? styles.active : null} text text_type_main-default`}>{text}</p>
    </a>

  )

}

export default MenuSection;