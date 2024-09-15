import { User } from '@/shared'
import { type FC } from 'react'
import styles from './user-card.module.scss'
import { DropdownArchiveCard } from '../Dropdown'

interface Props {
  user: User
}

export const UserArchiveCard: FC<Props> = (props) => {
  const { user } = props
  return (
    <div className={styles.user_card_wrapper}>
      <img src='/defaultAvatar.jpg' alt='avatar default' className={`${styles.avatar} ${styles.avatar_archive}`} />
      <div className={styles.info}>
        <div>
          <div className={styles.name_wrapper}>
            <h3 className={`headline ${styles.name_archive}`}>{user.name}</h3>
            <DropdownArchiveCard user={user} />
          </div>
          <p className={`text2-medium ${styles.company}`}>{user.company.name}</p>
        </div>
        <p className={`caption ${styles.city_archive}`}>{user.address.city}</p>
      </div>
    </div>
  )
}

export default UserArchiveCard