import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export default authService = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
  }),
  endpoints: (builder) => {
    return {
      authLogin: builder.mutation({
        query: (loginData) => {
          return {
            url: "",
            method: "POST",
            body: loginData,
          };
        },
      }),
    };
  },
});

export const { useAuthLoginMutaion } = authService;
