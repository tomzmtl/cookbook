import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { API_BASE_URL } from "../../common/constants"
import { IntakeReport } from "../../types"

export const reportApi = createApi({
  reducerPath: "report",
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  endpoints: build => ({
    getLatest: build.query<IntakeReport, void>({
      query: () => ({ url: `${API_BASE_URL}/report` }),
    })
  })
})
