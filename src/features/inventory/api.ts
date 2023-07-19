import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { API_BASE_URL } from "../../common/constants"
import { Product } from "../../types"

export const inventoryApi = createApi({
  reducerPath: "inventory",
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  endpoints: build => ({
    getAll: build.query<Product[], void>({
      query: () => ({ url: `${API_BASE_URL}/products` }),
    })
  })
})
