import { apiSlice } from './apiSlice.js';

export const productsApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		getAllProducts: builder.query({
			query: () => 'products/',
			validateStatus: (response, result) => {
				return response.status === 200 && !result.isError;
			},
			providesTags: [{ type: 'Products', id: 'ALL' }],
		}),
		getNewProducts: builder.query({
			query: () => 'products/new',
			validateStatus: (response, result) => {
				return response.status === 200 && !result.isError;
			},
			providesTags: [{ type: 'Products', id: 'NEW' }],
		}),
		getProductsById: builder.query({
			query: id => `products/${id}`,
			validateStatus: (response, result) => {
				return response.status === 200 && !result.isError;
			},
			providesTags: [{ type: 'Products', id: 'BY_ID' }],
		}),
		getProductsByCategory: builder.query({
			query: category => `products?category=${category}`,
			validateStatus: (response, result) => {
				return response.status === 200 && !result.isError;
			},
			providesTags: [{ type: 'Products', id: 'BY_CATEGORY' }],
		}),
		getProductsByCollection: builder.query({
			query: collection => `products?collection=${collection}`,
			validateStatus: (response, result) => {
				return response.status === 200 && !result.isError;
			},
			providesTags: [{ type: 'Products', id: 'BY_COLLECTION' }],
		}),
		getProductsByBrand: builder.query({
			query: brand => `products?brand=${brand}`,
			validateStatus: (response, result) => {
				return response.status === 200 && !result.isError;
			},
			providesTags: [{ type: 'Products', id: 'BY_BRAND' }],
		}),
		getProductsByStyle: builder.query({
			query: style => `products?style=${style}`,
			validateStatus: (response, result) => {
				return response.status === 200 && !result.isError;
			},
			providesTags: [{ type: 'Products', id: 'BY_STYLE' }],
		}),
	}),
});

export const {
	useGetAllProductsQuery,
	useGetNewProductsQuery,
	useGetProductsByIdQuery,
	useGetProductsByCategoryQuery,
	useGetProductsByCollectionQuery,
	useGetProductsByBrandQuery,
	useGetProductsByStyleQuery,
} = productsApiSlice;
