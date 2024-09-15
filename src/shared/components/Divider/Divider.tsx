import { type FC } from 'react'
import styles from './divider.module.scss'

interface Props {
  className?: string
}

export const Divider: FC<Props> = (props) => {
  const { className } = props

  return (
    <div className={`${styles.divider} ${className}`}>

    </div>
  )
}

export default Divider