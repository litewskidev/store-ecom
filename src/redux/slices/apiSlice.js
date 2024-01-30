import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://culture.litewskidev.usermd.net/api/'
  }),
  tagTypes: ['Products'],
  endpoints: builder => ({}),
});
