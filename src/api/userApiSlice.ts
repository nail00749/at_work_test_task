import { apiSlice } from '@/api/apiSlice.ts'
import { User } from '@/shared'

const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => '/users?_limit=6',
    })
  })
})

export default userApiSlice
export const { useGetUsersQuery } = userApiSlice