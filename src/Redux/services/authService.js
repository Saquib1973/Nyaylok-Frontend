import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authService = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_URL,
    prepareHeaders: (headers) => {
      // Include withCredentials: true in the request headers
      headers.withCredentials = true;
      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      login: builder.mutation({
        query: (data) => {
          return {
            url: "auth/login",
            method: "POST",
            body: data,
            withCredentials: true,
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          };
        },
      }),
      register: builder.mutation({
        query: (data) => {
          return {
            url: "auth/register",
            method: "POST",
            body: data,
          };
        },
      }),
    };
  },
});

export const { useLoginMutation, useRegisterMutation } = authService;
export default authService;
