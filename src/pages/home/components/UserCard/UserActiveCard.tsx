import { type FC } from 'react'

import { User } from '@/shared'
import styles from './user-card.module.scss'
import { DropdownActiveCard } from '../Dropdown'

interface Props {
  user: User
}

export const UserActiveCard: FC<Props> = (props) => {
  const { user } = props
  return (
    <div className={styles.user_card_wrapper}>
      <img src='/defaultAvatar.jpg' alt='avatar default' className={styles.avatar} />
      <div className={styles.info}>
        <div>
          <div className={styles.name_wrapper}>
            <h3 className={`headline ${styles.name}`}>{user.name}</h3>
            <DropdownActiveCard user={user} />
          </div>
          <p className={`text2-medium ${styles.company}`}>{user.company.name}</p>
        </div>
        <p className={`caption ${styles.city}`}>{user.address.city}</p>
      </div>
    </div>
  )
}
