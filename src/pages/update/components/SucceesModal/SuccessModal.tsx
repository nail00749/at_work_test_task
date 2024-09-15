import { type FC } from 'react'
import { Portal } from '@/shared'
import styles from './success-modal.module.scss'

interface Props {
  open: boolean
  onClose: () => void
}

export const SuccessModal: FC<Props> = (props) => {
  const { open, onClose } = props

  return (
    <Portal open={open} onClose={onClose}>
      <div>
        <div className={styles.image_container}>
          <img src='/Checked-box.png' alt='' className={styles.image} />
        </div>
        <div className={`headline ${styles.title}`}>Изменения сохранены!</div>
      </div>
    </Portal>
  )
}

export default SuccessModal