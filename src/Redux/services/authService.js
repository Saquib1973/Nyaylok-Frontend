import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authService = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_URL,
    prepareHeaders: (headers) => {
      headers.withCredentials = true;
      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      login: builder.mutation({
        query: (data) => {
          return {
            url: process.env.REACT_APP_LOGIN,
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
            url: process.env.REACT_APP_REGISTER,
            method: "POST",
            body: data,
          };
        },
      }),
      logout: builder.query({
        query: () => {
          return {
            url: process.env.REACT_APP_LOGOUT,
            method: "GET",
            withCredentials: true,
            credentials: "include",
          };
        },
      }),
    };
  },
});

export const { useLoginMutation, useRegisterMutation, useLazyLogoutQuery } =
  authService;
export default authService;
