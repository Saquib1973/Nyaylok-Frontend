import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ipcService = createApi({
  reducerPath: "ipc",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_IPC_URL,
    prepareHeaders: (headers) => {
      headers.withCredentials = true;
      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      ipc: builder.query({
        query: () => {
          return {
            url: "IPC/getIPCsNumber",
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          };
        },
      }),
    };
  },
});

export const { useIpcQuery } = ipcService;
export default ipcService;
