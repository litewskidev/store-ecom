import { apiSlice } from "./apiSlice.js";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => 'products',
    }),
    getProductsByCategory: builder.query({
      query: (category) => `products?category=${category}`,
    }),
    getProductsByCollection: builder.query({
      query: (collection) => `products?collection=${collection}`,
    }),
    getProduct: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductsByCategoryQuery, useGetProductsByCollectionQuery, useGetProductQuery } = productsApiSlice;
