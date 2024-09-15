import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUser } from '@/api/users/index.ts'

export const userThunk = createAsyncThunk('user', async (id: number) => {
  return await getUser(id)
})