import { User } from '@/shared'
import { createSlice } from '@reduxjs/toolkit'
import { usersThunks } from './thunks'
import { RootState } from '@/core/store/types.ts'

interface State {
  activeUsers: User[]
  archiveUsers: User[]
  loading: boolean
  error?: string
}

const initialState: State = {
  activeUsers: [],
  archiveUsers: [],
  loading: true
}
export const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {
    archiveUser: (state, action: { payload: User }) => {
      state.archiveUsers.push(action.payload)
      state.activeUsers = state.activeUsers.filter((user) => user.id !== action.payload.id)
    },
    activateUser: (state, action: { payload: User }) => {
      state.activeUsers.push(action.payload)
      state.archiveUsers = state.archiveUsers.filter((user) => user.id !== action.payload.id)
    },
    removeActiveUser: (state, action: { payload: number }) => {
      state.activeUsers = state.activeUsers.filter((user) => user.id !== action.payload)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(usersThunks.pending, (state) => {
      state.loading = true
      state.activeUsers = []
    })
    builder.addCase(usersThunks.fulfilled, (state, action) => {
      state.loading = false
      state.activeUsers = action.payload
    })
    builder.addCase(usersThunks.rejected, (state, action) => {
      state.loading = false
      state.activeUsers = []
      state.error = action.error.message
    })
  }
})

export const activeUsersSelector = (state: RootState) => state.usersSlice.activeUsers
export const archiveUsersSelector = (state: RootState) => state.usersSlice.archiveUsers
export const isLoadingSelector = (state: RootState) => state.usersSlice.loading
export const errorSelector = (state: RootState) => state.usersSlice.error


const { actions } = usersSlice
export const { archiveUser, activateUser, removeActiveUser } = actions


