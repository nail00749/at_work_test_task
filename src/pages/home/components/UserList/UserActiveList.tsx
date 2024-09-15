import { type FC, useEffect } from 'react'
import { Divider } from '@/shared'
import styles from './user-list.module.scss'
import { UserActiveCard } from '../UserCard'
import { useAppSelector, useAppDispatch } from '@/core/store'
import { usersThunks } from '../../store/thunks'
import { activeUsersSelector, errorSelector, isLoadingSelector } from '../../store'


export const UserActiveList: FC = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector(activeUsersSelector)
  const isLoading = useAppSelector(isLoadingSelector)
  const error = useAppSelector(errorSelector)

  useEffect(() => {
    dispatch(usersThunks())
  }, [dispatch])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      <h2 className={'title'}>Активные</h2>
      <Divider className={styles.list_divider} />
      <div className={styles.user_list_wrapper}>
        {users.map((user) => {
          return <UserActiveCard key={user.id} user={user} />
        })}
      </div>
    </div>
  )
}

export default UserActiveList