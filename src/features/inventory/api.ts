import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const COOKBOOK_API_BASE_URL = "https://mbwvw3w686.execute-api.us-east-1.amazonaws.com/prod"

export const inventoryApi = createApi({
  reducerPath: "inventory",
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  endpoints: build => ({
    getAll: build.query({
      query: () => ({ url: `${COOKBOOK_API_BASE_URL}/products` }),
    })
  })
})
