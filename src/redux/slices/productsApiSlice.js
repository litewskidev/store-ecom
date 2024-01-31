import { apiSlice } from "./apiSlice.js";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getAllProducts: builder.query({
      query: () => 'products',
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      providesTags: [{ type: 'Products', id: 'ALL' }],
    }),
    getNewProducts: builder.query({
      query: () => 'products?new=true',
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      providesTags: [{ type: 'Products', id: 'NEW' }],
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
    getProductsById: builder.query({
      query: id => `products/${id}`,
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      providesTags: [{ type: 'Products', id: 'BY_ID' }],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetNewProductsQuery,
  useGetProductsByCategoryQuery,
  useGetProductsByCollectionQuery,
  useGetProductsByBrandQuery,
  useGetProductsByIdQuery,
} = productsApiSlice;
