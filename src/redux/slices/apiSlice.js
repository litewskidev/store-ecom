import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
	baseUrl: 'http://localhost:8888/api/',
	credentials: 'include',
	prepareHeaders: (headers, { getState }) => {
		const token = getState().auth.token;

		if (token) {
			headers.set('authorization', `Bearer ${token}`);
		}

		return headers;
	},
});

export const apiSlice = createApi({
	baseQuery,
	tagTypes: ['Users', 'Products', 'Brands', 'Stores'],
	endpoints: builder => ({}),
});
