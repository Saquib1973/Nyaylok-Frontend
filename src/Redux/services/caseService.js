import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const caseService = createApi({
  reducerPath: "case",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_URL,
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
          return {
            url: "cases/registerCase",
            method: "POST",
            body: data,
            withCredentials: true,
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
            withCredentials: true,
            credentials: "include",
          };
        },
      }),
      getCases: builder.query({
        query: (page) => {
          return {
            url: `cases/IncompleteCasesPaginated/?page=${page}&pageLimit=6`,
            method: "GET",
            withCredentials: true,
            credentials: "include",
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
