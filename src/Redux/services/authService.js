import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const authService = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:1978/auth/",
    headers: {
      "Content-Type": "application/json",
    },
  }),
  endpoints: (builder) => {
    return {
      login: builder.mutation({
        query: (data) => {
          console.log("loginData", data);
          return {
            url: "login",
            method: "POST",
            body: data,
          };
        },
      }),
    };
  },
});

export const { useLoginMutation } = authService;
export default authService;
