import { type FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '@/widgets'
import { Provider } from 'react-redux'
import { store } from '../store'

export const Root: FC = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
    </Provider>
  )
}

export default Root