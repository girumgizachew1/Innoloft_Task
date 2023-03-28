import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const innoloftApi = createApi({
  reducerPath: 'innoloftApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-test.innoloft.com/',
    prepareHeaders: (headers) => {
      // Add any required headers here
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProduct: builder.query({query: () => 'product/6781/'}),
    updateProduct: builder.mutation({
      query: (product) => ({
        url: `product/6781/`,
        method: 'PUT',
        body: product,
      }),
    }),
    getTRLList: builder.query({
      query: () => 'trl/',
    }),
    getAppConfig: builder.query({
      query: (appId) => `configuration/${appId}/`,
    }),
  }),
});

export const {
  useGetProductQuery,
  useUpdateProductMutation,
  useGetTRLListQuery,
  useGetAppConfigQuery,
} = innoloftApi;
