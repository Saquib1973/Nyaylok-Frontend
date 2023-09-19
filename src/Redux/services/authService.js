import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const authService = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_URL,
    // baseUrl: "http://localhost:1978/",
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
            withCredentials:true,
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          };
        },
      }),
    };
  },
});

export const { useLoginMutation } = authService;
export default authService;
