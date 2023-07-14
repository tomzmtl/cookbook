import { configureStore } from '@reduxjs/toolkit'
import { inventoryApi } from '../features/inventory/api'
import { reportsApi } from '../features/reports/api'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

export const store = configureStore({
  reducer: {
    [inventoryApi.reducerPath]: inventoryApi.reducer,
    [reportsApi.reducerPath]: reportsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      inventoryApi.middleware,
      reportsApi.middleware
    ),
})

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch