import { type FC, ButtonHTMLAttributes } from 'react'
import styles from './button.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  test?: string
}

export const Button: FC<Props> = (props) => {
  const { children, className, ...rest } = props

  return (
    <button className={`${styles.button} text2-semi ${className}`}  {...rest}>
      {children}
    </button>
  )
}

export default Button