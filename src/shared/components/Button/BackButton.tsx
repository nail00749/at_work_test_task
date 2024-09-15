import { type FC } from 'react'
import { BackArrowIcon } from '../Icons'
import styles from './back-button.module.scss'
import { Link } from 'react-router-dom'

export const BackButton: FC = () => {
  return (
    <Link to={'..'}>
      <div className={styles.back_button}>
        <BackArrowIcon />
        <span>Назад</span>
      </div>
    </Link>
  )
}

export default BackButton