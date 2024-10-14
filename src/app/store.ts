import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { recipeSlice } from "../features/recipe/slice"

export const store = configureStore({
  reducer: {
    recipe: recipeSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat
      // inventoryApi.middleware,
      (),
})

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
