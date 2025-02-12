import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_TELEGRAM, TOKEN_TELEGRAM, USER_TELEGRAM } from 'res/const'

export const appApi = createApi({
  reducerPath: 'appApi',
  tagTypes: ['App'],
  baseQuery: fetchBaseQuery({
    baseUrl: '/'
  }),
  endpoints: builder => ({
    getPosts: builder.query<any, any>({
      // @ts-ignore
      query: async () => {}
    })
  })
})

export const { useGetPostsQuery } = appApi
