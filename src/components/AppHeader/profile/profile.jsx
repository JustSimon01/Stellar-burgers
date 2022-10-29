import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './menu-section.module.css';


function Profile(){

  return (
    <div className= {styles.section}>
      <ProfileIcon type="secondary" />
      <p className= {styles.text}>Личный кабинет</p>
    </div>
  )

}

export default Profile;