import { User } from '@/shared'
import { createSlice } from '@reduxjs/toolkit'
import { userThunk } from './thunks'
import { RootState } from '@/core/store'


interface State {
  user?: User
  loading: boolean
  error?: string
}


const initialState: State = {
  loading: false
}

export const updateUserSlice = createSlice({
  name: 'updateUserSlice',
  initialState,
  reducers: {
    updateUser: (state, action: { payload: User }) => {
      state.user = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(userThunk.pending, (state) => {
      state.loading = true
    })
    builder.addCase(userThunk.fulfilled, (state, action) => {
      state.loading = false
      state.user = action.payload
    })
    builder.addCase(userThunk.rejected, (state, action) => {
      state.loading = false
      state.user = undefined
      state.error = action.error.message
    })
  }
})

const { actions } = updateUserSlice
export const { updateUser } = actions

export const userSelector = (state: RootState) => state.updateUserSlice.user
export const isLoadingSelector = (state: RootState) => state.updateUserSlice.loading
export const errorSelector = (state: RootState) => state.updateUserSlice.error

export default updateUserSlice


