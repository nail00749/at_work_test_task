import { type FC, ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'
import styles from './portal.module.scss'
import { CrossIcon } from '..'

interface Props {
  open: boolean
  onClose: () => void
  children: ReactNode
}

export const Portal: FC<Props> = (props) => {
  const { open, onClose, children } = props

  useEffect(() => {
    const id = setTimeout(() => {
      onClose()
    }, 4000)

    return () => {
      clearTimeout(id)
    }
  }, [onClose, open])

  if (!open) {
    return null
  }


  return (
    <>{
      createPortal(<div className={styles.backdrop}>
        <div className={styles.wrapper}>
          <div className={styles.button_container}>
            <button type={'button'} onClick={onClose}><CrossIcon /></button>
          </div>
          <div>
            {children}
          </div>
        </div>
      </div>, document.getElementById('portal')!)
    }</>
  )
}

export default Portal