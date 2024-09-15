import { type FC, HTMLProps, memo } from 'react'
import { CrossIcon } from '@/shared'
import styles from './input.module.scss'


interface Props extends HTMLProps<HTMLInputElement> {
  heading?: string
  handleClear?: (name?: string) => void
}

export const TextField: FC<Props> = memo((props) => {
  const { heading, handleClear, placeholder, name, ...rest } = props

  return (
    <div className={styles.wrapper}>
      <label className={'headline'}>{heading}</label>
      <span>
        <input className={'text2-medium'} placeholder={placeholder ?? heading} name={name} {...rest} />
        <button
          type={'button'} onClick={() => handleClear?.(name)} className={styles.cross}
        >
          <CrossIcon />
        </button>
      </span>
    </div>
  )
})
