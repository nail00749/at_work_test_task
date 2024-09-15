import { useAppDispatch, useAppSelector } from '@/core/store'
import { type FC, useEffect } from 'react'
import { userThunk } from './store/thunks'
import { useParams } from 'react-router-dom'
import { errorSelector, isLoadingSelector } from './store'
import { Settings, UserData } from './components'
import { BackButton } from '@/shared'
import styles from './update.module.scss'

export const UpdatePage: FC = () => {
  const params = useParams()
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(isLoadingSelector)
  const error = useAppSelector(errorSelector)

  useEffect(() => {
    if (params.id) {
      dispatch(userThunk(+params.id))
    }
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className={styles.page_wrapper}>
      <div className={styles.back_button}>
        <BackButton />
      </div>
      <div className={styles.container}>
        <Settings />
        <UserData />
      </div>
    </div>
  )
}

export default UpdatePage