import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/auth",
    credentials: "include"
  }),
  endpoints: (builder) => ({
    submitLoginForm: builder.mutation({
      query: (formData) => ({
        url: '/login',
        method: 'POST',
        body: formData,
      }),
    }),
  }),
});

export const {useSubmitLoginFormMutation} = loginApi;
