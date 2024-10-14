import { RootState } from "../../app/store"

export const selectSelectedRecipe = (state: RootState) => state.recipe.selected
