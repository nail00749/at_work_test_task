import { getUsers } from '@/api/users'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const usersThunks = createAsyncThunk('users', async () => {
  return await getUsers()
})