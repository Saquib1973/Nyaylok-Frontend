import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const authService = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://nyaylok-server.onrender.com/auth/",
    // baseUrl: "http://localhost:1978/auth/",
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
            url: "login",
            method: "POST",
            body: data,
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
