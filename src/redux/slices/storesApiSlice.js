import { apiSlice } from './apiSlice.js';

export const storesApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		getAllStores: builder.query({
			query: () => 'stores/',
			validateStatus: (response, result) => {
				return response.status === 200 && !result.isError;
			},
			providesTags: [{ type: 'Stores', id: 'ALL' }],
		}),
		getStoresById: builder.query({
			query: id => `stores/${id}`,
			validateStatus: (response, result) => {
				return response.status === 200 && !result.isError;
			},
			providesTags: [{ type: 'Stores', id: 'BY_ID' }],
		}),
	}),
});

export const { useGetAllStoresQuery, useGetStoresByIdQuery } = storesApiSlice;
