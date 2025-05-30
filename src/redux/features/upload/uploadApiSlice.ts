import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const uploadApi = createApi({
  reducerPath: 'uploadApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    credentials: "include"
  }),
  endpoints: (builder) => ({
    upload: builder.mutation({
      query: (data) => ({
        url: '/upload',
        method:"POST",
        body:data
      }),
    }),
  }),
});

export const {useUploadMutation} = uploadApi;
