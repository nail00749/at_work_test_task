import { type FC } from 'react'
import styles from './home.module.scss'
import { UserActiveList, UserArchiveList } from './components'

export const HomePage: FC = () => {
  return (
    <div className={styles.page_wrapper}>
      <div className={styles.list_wrapper}>
        <UserActiveList />
        <UserArchiveList />

      </div>
    </div>
  )
}

export default HomePage