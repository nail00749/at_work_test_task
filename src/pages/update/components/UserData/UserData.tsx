import { type FC, FormEvent, useState, ChangeEvent, useCallback } from 'react'
import { useAppSelector } from '@/core/store/index.ts'
import { userSelector } from '../../store'

import styles from './user-data.module.scss'
import { Button, Divider, TextField } from '@/shared'
import { SuccessModal } from '../SucceesModal'


export const UserData: FC = () => {
  const user = useAppSelector(userSelector)
  const [data, setData] = useState({
    name: user?.name,
    username: user?.username,
    email: user?.email,
    city: user?.address.city,
    phone: user?.phone,
    company: user?.company.name
  })
  const [open, setOpen] = useState(false)

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }, [data, setData])

  const handleClear = useCallback((name?: string) => {
    if (!name) {
      return
    }

    setData({ ...data, [name]: '' })
  }, [data, setData])

  const handleSubmit = (e: FormEvent) => {
    // TODO react-hook-form and zod
    e.preventDefault()
    for (const key in data) {
      const k = key as keyof typeof data
      if (!data[k]) {
        console.error(key, data[k], 'empty')
        return
      }
    }
    setOpen(true)
  }

  const handleCloseModal = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  if (!user) {
    return null
  }

  return (
    <div className={styles.wrapper}>
      <h3 className={'title'}>Данные профиля</h3>
      <Divider />
      <form onSubmit={handleSubmit}>
        <div className={styles.fields}>
          <TextField
            value={data.name} onChange={handleChange} handleClear={handleClear} heading={'Имя'} name={'name'}
          />
          <TextField
            value={data.username} onChange={handleChange} handleClear={handleClear} heading={'Никнейм'}
            name={'username'}
          />
          <TextField
            value={data.email} onChange={handleChange} handleClear={handleClear} heading={'Почта'} name={'email'}
          />
          <TextField
            value={data.city} onChange={handleChange} handleClear={handleClear} heading={'Город'} name={'city'}
          />
          <TextField
            value={data.phone} onChange={handleChange} handleClear={handleClear} heading={'Телефон'} name={'phone'}
          />
          <TextField
            value={data.company} onChange={handleChange} handleClear={handleClear} heading={'Название компании'}
            name={'company'}
          />
          <Button type={'submit'} className={styles.button}>Сохранить</Button>
        </div>
      </form>
      <SuccessModal open={open} onClose={handleCloseModal} />

    </div>
  )
}

export default UserData