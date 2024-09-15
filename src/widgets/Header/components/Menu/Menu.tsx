import { type FC } from 'react'

import { FavoriteIcon, NotificationIcon } from '@/shared'
import styles from './menu.module.scss'

export const Menu: FC = () => {
  return (
    <div className={'flex-center'}>
      <div className={`${styles.icons}`}>
        <FavoriteIcon />
        <NotificationIcon />
      </div>

      <div className={styles.menu_wrapper}>
        <img src='/defaultAvatar.jpg' alt='avatar' className={styles.user_avatar} />
        <span className={`text2-medium ${styles.nickname}`}>user</span>
      </div>

    </div>
  )
}

export default Menu