import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { API_BASE_URL } from "../../common/constants"

export const inventoryApi = createApi({
  reducerPath: "inventory",
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  endpoints: build => ({
    getAll: build.query({
      query: () => ({ url: `${API_BASE_URL}/products` }),
    })
  })
})
