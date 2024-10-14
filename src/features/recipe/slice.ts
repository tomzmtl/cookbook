import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type RecipeSlice = {
  selected: string | null
}

const initialState: RecipeSlice = {
  selected: null,
}

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    selectRecipe: (state, action: PayloadAction<string>) => {
      state.selected = action.payload
    },

    unselect: (state) => {
      state.selected = null
    },
  },
})

export const { selectRecipe, unselect } = recipeSlice.actions
