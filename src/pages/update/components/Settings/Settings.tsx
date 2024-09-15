import { type FC } from 'react'
import { useAppSelector } from '@/core/store'
import { userSelector } from '../../store'
import { Category } from '@/shared'
import styles from './user-settings.module.scss'

export const Settings: FC = () => {
  const user = useAppSelector(userSelector)

  if (!user) {
    return null
  }

  return (
    <div className={styles.setting_wrapper}>
      <img src='/defaultAvatar.jpg' alt='default avatar' className={styles.avatar} />
      <div className={styles.category}>
        <Category list={['Данные профиля', 'Рабочее пространство', 'Приватность', 'Безопасность']} />
      </div>
    </div>
  )
}

export default Settings