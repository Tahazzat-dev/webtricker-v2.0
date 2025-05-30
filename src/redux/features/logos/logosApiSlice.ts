import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const logosApi = createApi({
  reducerPath: 'logosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/settings",
    credentials: "include"
  }),
  endpoints: (builder) => ({
    getLogos: builder.query({
      query: () => ({
        url: '/logos',
      }),
    }),
    updateSiteLogo: builder.mutation({
      query: (data) => ({
        url: '/logos',
        method:"PUT",
        body:data
      }),
    }),
  }),
});

export const {useLazyGetLogosQuery, useUpdateSiteLogoMutation} = logosApi;
