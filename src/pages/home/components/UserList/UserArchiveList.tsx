import { type FC } from 'react'
import { Divider } from '@/shared'
import { useAppSelector } from '@/core/store'
import styles from './user-list.module.scss'
import { UserArchiveCard } from '../UserCard'
import { archiveUsersSelector } from '../../store'

export const UserArchiveList: FC = () => {
  const users = useAppSelector(archiveUsersSelector)


  return (
    <div>
      <h2 className={'title'}>Архив</h2>
      <Divider className={styles.list_divider} />
      {users.length === 0 && <div>Архив пуст</div>}
      <div className={styles.user_list_wrapper}>
        {users.map((user) => {
          return <UserArchiveCard key={user.id} user={user} />
        })}
      </div>
    </div>
  )
}

export default UserArchiveList