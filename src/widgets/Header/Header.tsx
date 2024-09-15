import { type FC } from 'react'
import { Menu } from './components'

import styles from './header.module.scss'
import { LogoIcon } from '@/shared'
import { Link } from 'react-router-dom'

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Link to={'/'}>
        <LogoIcon />
      </Link>
      <Menu />

    </header>
  )
}

export default Header