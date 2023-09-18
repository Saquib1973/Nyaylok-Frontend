import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const caseService = createApi({
  reducerPath: "case",
  baseQuery: fetchBaseQuery({
    // baseUrl: process.env.REACT_APP_BACKEND_URL,
    baseUrl: "http://localhost:1978/",
    headers: {
      "Content-Type": "application/json",
    },
    prepareHeaders: (headers) => {
      // Include withCredentials: true in the request headers
      headers.withCredentials = true;
      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      registerCase: builder.mutation({
        query: (data) => {
          console.log("Data", data);
          return {
            url: "cases/registerCase",
            method: "POST",
            body: data,
            credentials: "include",
          };
        },
      }),
      getCaseCount: builder.query({
        query: () => {
          return {
            url: "cases/caseCounts",
            method: "GET",
          };
        },
      }),
      getParticularCase: builder.query({
        query: (id) => {
          return {
            url: `cases/findCaseById/${id}`,
            method: "GET",
          };
        },
      }),
      getCases: builder.query({
        query: (page) => {
          return {
            url: `cases/IncompleteCasesPaginated/?page=${page}&pageLimit=6`,
            method: "GET",
          };
        },
      }),
    };
  },
});

export const {
  useRegisterCaseMutation,
  useGetCaseCountQuery,
  useLazyGetParticularCaseQuery,
  useLazyGetCasesQuery,
} = caseService;
export default caseService;
