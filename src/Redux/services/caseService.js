//  https://nyaylok-server.onrender.com/cases/IncompleteCases/cases/registerCase

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const caseService = createApi({
  reducerPath: "case",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://nyaylok-server.onrender.com/",
    // baseUrl: "http://localhost:1978/",
    headers: {
      "Content-Type": "application/json",
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
    };
  },
});

export const {
  useRegisterCaseMutation,
  useGetCaseCountQuery,
  useLazyGetParticularCaseQuery,
} = caseService;
export default caseService;
