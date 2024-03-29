import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:8888/api/',
	}),
	tagTypes: ['Users', 'Products', 'Brands', 'Stores'],
	endpoints: builder => ({}),
});
