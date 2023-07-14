import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { API_BASE_URL } from "../../common/constants"

export const reportsApi = createApi({
  reducerPath: "reports",
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  endpoints: build => ({
    get: build.query({
      query: () => ({ url: `${API_BASE_URL}/reports` }),
    })
  })
})
