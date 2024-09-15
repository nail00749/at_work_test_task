import { type FC, ReactNode } from 'react'
import { MoreIcon } from '../Icons'
import styles from './dropdown.module.scss'

interface Props {
  children?: ReactNode
}

export const Dropdown: FC<Props> = (props) => {
  const { children } = props

  return (
    <div className={styles.dropdown}>
      <MoreIcon />
      <div className={styles.dropdown_menu}>
        {children}
      </div>


    </div>
  )
}

export default Dropdown