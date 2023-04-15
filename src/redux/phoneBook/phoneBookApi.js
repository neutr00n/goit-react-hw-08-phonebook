import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const phoneBookApi = createApi({
  reducerPath: 'phoneBookApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().authorization.token;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    fetchAllContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({ url: `/contacts/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Contacts'],
    }),
    fetchAddContact: builder.mutation({
      query: contact => ({ url: `/contacts`, method: 'POST', body: contact }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useFetchAllContactsQuery,
  useDeleteContactMutation,
  useFetchAddContactMutation,
} = phoneBookApi;
