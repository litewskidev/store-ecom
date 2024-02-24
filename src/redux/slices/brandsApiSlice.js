import { apiSlice } from './apiSlice.js';

export const brandsApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		getAllBrands: builder.query({
			query: () => 'brands',
			validateStatus: (response, result) => {
				return response.status === 200 && !result.isError;
			},
			providesTags: [{ type: 'Brands', id: 'ALL' }],
		}),
		getBrandById: builder.query({
			query: id => `brands/${id}`,
			validateStatus: (response, result) => {
				return response.status === 200 && !result.isError;
			},
			providesTags: [{ type: 'Brands', id: 'BY_ID' }],
		}),
	}),
});

export const { useGetAllBrandsQuery, useGetBrandByIdQuery } = brandsApiSlice;
