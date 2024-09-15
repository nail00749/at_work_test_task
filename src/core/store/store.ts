import { configureStore } from '@reduxjs/toolkit'
import { usersSlice } from '../../pages/home/store/usersSlice'
import { updateUserSlice } from '../../pages/update/store/updateUserSlice'

export const store = configureStore({
  reducer: {
    [usersSlice.reducerPath]: usersSlice.reducer,
    [updateUserSlice.reducerPath]: updateUserSlice.reducer
  }
})
