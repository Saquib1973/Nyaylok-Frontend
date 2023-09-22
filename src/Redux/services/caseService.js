import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const caseService = createApi({
  reducerPath: "case",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_URL,
    headers: {
      "Content-Type": "application/json",
    },
    prepareHeaders: (headers) => {
      headers.withCredentials = true;
      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      registerCase: builder.mutation({
        query: (data) => {
          return {
            url: process.env.REACT_APP_REGISTER_CASE,
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
            url: process.env.REACT_APP_CASE_COUNT,
            method: "GET",
          };
        },
      }),
      getParticularCase: builder.query({
        query: (id) => {
          return {
            url: `${process.env.REACT_APP_GET_SINGLE_CASE}/${id}`,
            method: "GET",
            withCredentials: true,
            credentials: "include",
          };
        },
      }),
      getCases: builder.query({
        query: (page) => {
          return {
            url: `${process.env.REACT_APP_GET_CASES}/?page=${page}&pageLimit=6`,
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
