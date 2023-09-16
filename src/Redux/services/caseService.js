//  https://nyaylok-server.onrender.com/cases/IncompleteCases/cases/registerCase

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const caseService = createApi({
  reducerPath: "case",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://nyaylok-server.onrender.com/",
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
    };
  },
});

export const { useRegisterCaseMutation } = caseService;
export default caseService;
